# RPS_BlackBox

This project is designed to give students an environment to explore the idea of basic black box testing by manually creating hypothetical input/output test cases and comparing them to actual outcomes. The project does *not* incorporate automated testing, but rather is designed to give complete novices a sandbox to explore creating test cases in a well-defined, circumscribed environemnt.

This activity is designed to precede a programming assignment in which students must code a score resolution routine for Rock, Paper, Scissors.

## Rock, Paper, Scissors Gameplay

The game Rock, Paper, Scissors is implemented in Javascript to run in a standard web browser. Students may select a play, and the application will generate a pseudo-random play in response. Finally, the outcome is noted with an update to the score.

The game proceeds through a number of Turns; the player may 'restart' the game to reset the score and the play history.

## Error Creation

Each student's environment will include two errors in the score resolution routine. Note that the computer's choices of plays are unaltered and are uniformly distributed. Students are encouraged to create some supplementary form of notetaking in order to identify the errors as they occur.

Errors differ across individuals are based on the 'Name' entered at the start of the game. Note that this name must match the name supplied to the Scoring Tool.

## Scoring Tool

Because student errors differ according to their names (as seeds), the instructor requires a tool that displays the &ldquo;correct&rdquo; errors for a given student. The scoring tool takes a case-insenstive name as input and displays the associated errors. Alternatively, students may be given access to the Scoring Tool to self-check their work.

***

Access the game [here](https://anaptyxis.github.io/RPS_BlackBox/RPS.html).
Access the scoring tool [here](https://anaptyxis.github.io/RPS_BlackBox/RPS_ScoringTool.html).
