// Ref: https://docs.github.com/en/rest/users/users
export const USER = Object.freeze({
  login: 'lumirlumir',
  name: '루밀LuMir',
  bio: 'PLAY KEYBOARD, STRIKE A CODE🎨',
  get htmlUrl() {
    return `https://github.com/${this.login}`;
  },
});

// Ref: https://docs.github.com/en/rest/repos/repos
export const REPOSITORY = Object.freeze({
  name: 'web-blog',
  get fullName() {
    return `${USER.login}/${this.name}`;
  },
});
