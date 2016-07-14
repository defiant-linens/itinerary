# Git Workflow

- When beginning a new set of chages, make sure your local master is in sync with the org's master (git pull --rebase upstream master)

- To start making changes, create a new local branch (git checkout -b branchname)

- Make changes

- Check for commits from team members; pull new changes into feature branch on the team member's github page (git pull --rebase upsteam master)

- Push up to origin (git push origin branchname)

- Make a pull request

- Send out a notice on the slack page or github asking team members to review code changes. If a team member sees it and has time to review it, they'll code review with the person who made the changes. Perhaps target for special interest or something

- If the changes need modifications, you can keep making changes on your local feature branch. If you push to your origin's feature branch, the changes will be automatically added to the open pull request.

- When the pull request is accepted, switch back to master and delete the feature branch.

# Summary:

1. git checkout master
2. git pull --rebase upstream master
3. git checkout -b branchname
4. edit/commit
5. git pull --rebase upstream master
6. git push origin branchname
7. submit pull request
8. edit or not