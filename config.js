/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
      assets: {
        source: 'src/assets/images',
        destination: 'images',
      },
    },
  },
  locals: {
    heroImg: {
      src: 'images/backImage.jpeg',
      alt: 'Logo, Hero and blue gradient background'
    },
    title: {
      text: 'Login til Dreamplan'
    },
    body: {
      textArray: ['Du har modtaget denne mail, fordi du har bedt om at logge ind på din Dreamplan konto.', 'Klik på login knappen nedefor for at logge ind på din konto.', 'Hvis du ikke har bedt om at logge ind på din konto, så kan du bare ignorere denne mail.', 'Af sikkerhedsmæssige årsager, vil dette login link udløbe om 3 minutter. Derudover kan det kun anvendes en gang.']
    },
    contactEmail: {
      title: 'Er du i tvivl?',
      text: 'Har du så spørgsmål eller mangler du svar? Så kontakt os på',
      email: 'mailto:kunderservice@dreamplan.io'
    },
    company: {
      name: 'Dreamplan.io'
    }
  }
}
