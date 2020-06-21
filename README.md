### GETTING STARTED

#### Always work on your remote branch before merging into (central/team) master branch

1. Fork central repo into your own account (from https://github.com/aalasafidler/peepin - there is a little fork symbol on the top-right corner of the page)

2. Click fork again, it should say “You've already forked peepin“.

3. Navigate to your fork of the central repo, it will be something like Your-Name/https://github.com/aalasafidler/peepin

4. Now clone the central repo into a local folder on your machine (https://github.com/aalasafidler/peepin.git)

5. cd into the folder

6. Run “git remote -v” and you should see an ‘origin’ remote in there:

origin https://github.com/Your-Name/peepin.git (fetch)

origin https://github.com/Your-Name/peepin.git (push)



#### CREATE REMOTE TO CENTRAL REPO:

git remote add upstream https://github.com/aalasafidler/peepin.git

Run git remote -v again to check you have a remote to the central/team repo. You should see:

origin https://github.com/Your-Name/peepin.git (fetch)

origin https://github.ibm.com/Your-Name/peepin.git (push)

upstream https://github.com/aalasafidler/peepin.git (fetch)

upstream https://github.com/aalasafidler/peepin.git (push)



docs: https://help.github.com/en/github/getting-started-with-github/fork-a-repo
