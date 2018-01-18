<h1>Gulp Taskrunner Repo</h1>
<p>This will serve as a reference repository for common setup and tasks using Gulp taskrunner.</p>

<hr>
<br>
<h3>Preparing Gulp</h3>
<ul>
    <li>Create package.json (using npm init generally)</li>
    <li>Install gulp locally and globally (npm i --save-dev gulp)</li>
    <li>
        Create a src directory
        <ul>
            <li>This is where all files that will be used for gulp will go</li>
            <li>A dist folder will be created for post-compilation output</li>
            <li>(src and dist are not required folder names)</li>
        </ul>
    </li>
    <li>Create a gulpfile (gulpfile.js)</li>
    <li>Require gulp (const gulp = require('gulp');)</li>
</ul>

<br>

<h3>Top Level Tasks</h3>
<p><em>Follows structure of gulp.task(taskName: String, callback(){});</em></p>
<p><em>Run with gulp taskName</em></p>
<ul>
    <li>gulp.task - Define tasks</li>
    <li>gulp.src - Point to files for use</li>
    <li>gulp.dest - Point to folder destination of post-compilation files</li>
    <li>gulp.watch - Watch files/folders for changes</li>
</ul>

<h2>This branch's description:</h2>
<p>This branch shows a task that copies HTML files from one directory to another using gulp.</p>