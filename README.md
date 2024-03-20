This is the fork of https://github.com/mikepenz/release-changelog-builder-action. Branch `develop`. The goal is to support Gitea by default with our config by default

### Example

```yml
- name: Build Changelog
  uses: https://github.com/t2care/release-changelog-builder-action@v4
  env:
    token: ${{ secrets.GITEA_TOKEN }}
    baseUrl: ${{ secrets.GITHUB_SERVER_URL }}
```
Or you can declare TOKEN and SERVER_URL in ORG secrets

```yml
- name: Build Changelog
  uses: https://github.com/t2care/release-changelog-builder-action@v4
```