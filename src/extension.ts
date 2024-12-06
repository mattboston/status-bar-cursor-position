import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Create status bar item
    const statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right,
        100
    );

    // Update status bar with current position
    function updateStatusBar() {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            statusBarItem.hide();
            return;
        }

        const position = editor.selection.active;
        statusBarItem.text = `Ln ${position.line + 1}, Col ${position.character + 1}`;
        statusBarItem.show();
    }

    // Register event listeners
    context.subscriptions.push(
        vscode.window.onDidChangeTextEditorSelection(updateStatusBar),
        vscode.window.onDidChangeActiveTextEditor(updateStatusBar),
        statusBarItem
    );

    // Initial update
    updateStatusBar();
}

export function deactivate() {} 