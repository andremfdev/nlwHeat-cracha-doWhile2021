const LinksSocialMedia = {
    github: 'andremksdev',
    youtube: 'andremksdev',
    facebook: 'andremksdev',
    instagram: 'andremks.dev',
    twitter: 'andremksdev'
  }

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`    
    }
  }

  changeSocialMediaLinks()

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

fetch(url)

}

getGithubProfileInfos()