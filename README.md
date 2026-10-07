# Ghost A.I. — Windows preview

A local AI studio with conversations, cooperating project-memory layers, file editing and reviewed changes. Ghost is the application; Qwen is the separately downloaded local language model. Adding documents supplies retrievable context and does not retrain weights.

## Download

[Download Ghost 0.3.7 for Windows](https://github.com/Tboy450/ghost-ai-downloads/releases/tag/v0.3.7)

Download the ZIP and its `.sha256` file. This remains an **unsigned preview ZIP with a PowerShell installer**, not a signed EXE/MSIX.

1. Install [Node.js 24 or newer](https://nodejs.org/) if needed. This release was tested on Windows with Node 24.19.0.
2. Extract the ZIP, open `Ghost`, and run **Install Ghost.cmd**. It installs to `%LOCALAPPDATA%\Programs\Ghost` and creates a desktop shortcut without administrator privileges.
3. From the installed folder, run **Setup Ghost.cmd** once. Internet and several GB of disk space are needed to download the official Ollama engine and Qwen3 4B Instruct model.
4. Open the **Ghost** desktop shortcut or **Start Ghost.cmd**. Ghost opens at `http://127.0.0.1:4317`.
5. Run **Check tools** with the local model available. Real checks take about 20 minutes. Each tool is offered only after that model passes its own check; a new installation starts unchecked. To let Ghost propose a project's tests and builds, switch on the engines it uses in **Engines**.

## In this release

Eight chat tools: current time, list/read/search project files, propose edits, propose new files, list installed engines, and propose running a command. File traversal and returned reads are bounded and say when results are incomplete. The dispatcher refuses tools outside the current offered set. Review a proposed diff and approve its exact write; applied edits keep checkpoints and offer **Undo** without overwriting later work. **Engines** detects installed software and records which engines a project may use. A proposed command, such as the project's tests or build, runs only after you approve that exact command, only with an engine switched on for the project, in the project folder, with live output, Cancel, a 10-minute limit and a stored result Ghost can report. There is no general shell; you can widen a project's allowed commands, Ghost cannot. File results are cut to fit the space left in a reply and say how to continue.

Explicit English search → read requests now track actual tool evidence. With a clear matching file, Ghost can complete one skipped bounded read within the existing tool allowance and feed that content into the answer. It withholds premature claims and reports unfinished work when a read is unavailable, ambiguous, partial or stopped. Saved progress now survives reload/restart/project switches. Explicit Resume can finish an applicable unfinished read; Cancel stops the task. Authenticated owner/session records and fresh file/search checks prevent stale or foreign recovery, and applied/undone/cancelled work never replays. General multi-action planning remains pending.

Task mode is the default. **Debate** enables argument analysis. **Think** requests separate reasoning; when the model returns a trace it is expandable. Missing returned reasoning does not prove a lack of internal computation. The profile distinguishes weights, unavailable original training corpus, selected documents, ready memory and archive. Tool registration/checks/offers/calls/verified outcomes differ from installed engines. Development direction comes from checked source criteria or a dated packaged snapshot. Ghost has its own application identity and project memory; the unchanged Qwen model generates replies. Generated replies can still misdescribe facts.

The separate **Edit file with Ghost** dialog prepares a change to one selected file. It requires approval, supports new files inside an existing parent, and accepts UTF-8 up to 16 KB and 400 lines. Neither editing workflow retrains model weights. Browser control, hosted GitHub account integration, training ratings and admin counters remain pending. A listed provider or saved key is not proof of a functional connection.

After setup, local inference and memory do not need internet. Optional online services and GitHub do. Selected project folders under a sync service may be synced by that service.

## Updating

See `docs/INSTALL.md` in the ZIP. Close the Ghost server before installing the new ZIP into the same installation folder. Program files are backed up under `.install-backups`; `.ghost` data, `.runtime` models and external project folders are preserved. Existing models normally need no redownload. Closing the browser alone does not stop background processes. 547 source tests passed; a live check of all eight tools together on the default local model got 63/63 right with no unwanted calls. Actual ZIP checks verify signed task/facts modules and fresh install/reinstall using fixture data; fresh-machine setup, interrupted upgrades and uninstall remain uncertified. Hardware performance varies.

Source pushes and ZIP releases do not automatically update installed apps or the shared guest service. The shared chat launch page and endpoint are maintained separately from downloads.

## Distribution

This public repository holds download information, release assets and the shared-chat launch page. Development source/history stay in a separate private repository. Distributed JavaScript runtime files are inspectable. Packages exclude private conversations, credentials, development logs, model weights and recovered third-party source archives.

Ollama and Qwen are fetched separately from upstream distributions under their own licenses. Ghost is independent; upstream projects do not endorse it.
