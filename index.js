#!/usr/bin/env node
const program = require('commander');
const korgin = require('./src/korgin');

program
    .command('list')
    .description('display all bookmarks')
    .option('-s, --star', 'Display starred bookmarks')
    .option('-a, --archive', 'Display archived bookmarks')
    .action((options) => {
        korgin.list(options)
    });

program
    .command('add <url> [tags...]')
    .description('add new bookmark')
    .action((url, tags) => {
        korgin.add(url, tags)
    });

program
    .command('delete <id>')
    .description('delete bookmark')
    .action((id) => {
        korgin.destroy(id)
    });

program
    .command('read <id>')
    .description('read bookmark offline')
    .action((id) => {
        korgin.read(id)
    });

program
    .command('open <id>')
    .description('open bookmark url in browser')
    .action((id) => {
        korgin.open(id)
    });

program
    .command('archive <id>')
    .description('archive/restore bookmark')
    .action((id) => {
        korgin.archive(id)
    });

program
    .command('star <id>')
    .description('star/Unstar bookmark')
    .action((id) => {
        korgin.star(id)
    });

program
    .command('add-tags <id> [tags...]')
    .alias('add-tag')
    .description('add tags to bookmark')
    .action((id, tags) => {
        korgin.addTag(id, tags)
    });

program
    .command('remove-tags <id> [tags...]')
    .alias('remove-tag')
    .description('remove tags from bookmark')
    .action((id, tags) => {
        korgin.removeTag(id, tags)
    });

program.parse(process.argv);