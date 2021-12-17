<!--lint disable no-literal-urls-->

<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://nodejs.org/static/images/logo-light.svg"
      width="400"
    />
  </a>
</p>

Node.js is an open-source, cross-platform, JavaScript runtime environment.

For information on using Node.js, see the [Node.js Website][].

The Node.js project uses an [open governance model](./GOVERNANCE.md). The
[OpenJS Foundation][] provides support for the project.

**This project has a [Code of Conduct][].**

# Table of contents

* [Support](#support)
* [Release types](#release-types)
  * [Download](#download)
    * [Current and LTS releases](#current-and-lts-releases)
    * [Nightly releases](#nightly-releases)
    * [API documentation](#api-documentation)
  * [Verifying binaries](#verifying-binaries)
* [Building Node.js](#building-nodejs)
* [Security](#security)
* [Contributing to Node.js](#contributing-to-nodejs)
* [Current project team members](#current-project-team-members)
  * [TSC (Technical Steering Committee)](#tsc-technical-steering-committee)
  * [Collaborators](#collaborators)
  * [Triagers](#triagers)
  * [Release keys](#release-keys)
* [License](#license)

## Support

Looking for help? Check out the
[instructions for getting support](.github/SUPPORT.md).

## Release types

* **Current**: Under active development. Code for the Current release is in the
  branch for its major version number (for example,
  [v15.x](https://github.com/nodejs/node/tree/v15.x)). Node.js releases a new
  major version every 6 months, allowing for breaking changes. This happens in
  April and October every year. Releases appearing each October have a support
  life of 8 months. Releases appearing each April convert to LTS (see below)
  each October.
* **LTS**: Releases that receive Long Term Support, with a focus on stability
  and security. Every even-numbered major version will become an LTS release.
  LTS releases receive 12 months of _Active LTS_ support and a further 18 months
  of _Maintenance_. LTS release lines have alphabetically-ordered code names,
  beginning with v4 Argon. There are no breaking changes or feature additions,
  except in some special circumstances.
* **Nightly**: Code from the Current branch built every 24-hours when there are
  changes. Use with caution.

Current and LTS releases follow [Semantic Versioning](https://semver.org). A
member of the Release Team [signs](#release-keys) each Current and LTS release.
For more information, see the
[Release README](https://github.com/nodejs/Release#readme).

### Download

Binaries, installers, and source tarballs are available at
<https://nodejs.org/en/download/>.

#### Current and LTS releases

<https://nodejs.org/download/release/>

The [latest](https://nodejs.org/download/release/latest/) directory is an
alias for the latest Current release. The latest-_codename_ directory is an
alias for the latest release from an LTS line. For example, the
[latest-fermium](https://nodejs.org/download/release/latest-fermium/) directory
contains the latest Fermium (Node.js 14) release.

#### Nightly releases

<https://nodejs.org/download/nightly/>

Each directory name and filename contains a date (in UTC) and the commit
SHA at the HEAD of the release.

#### API documentation

Documentation for the latest Current release is at <https://nodejs.org/api/>.
Version-specific documentation is available in each release directory in the
_docs_ subdirectory. Version-specific documentation is also at
<https://nodejs.org/download/docs/>.

### Verifying binaries

Download directories contain a `SHASUMS256.txt` file with SHA checksums for the
files.

To download `SHASUMS256.txt` using `curl`:

```console
$ curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt
```

To check that a downloaded file matches the checksum, run
it through `sha256sum` with a command such as:

```console
$ grep node-vx.y.z.tar.gz SHASUMS256.txt | sha256sum -c -
```

For Current and LTS, the GPG detached signature of `SHASUMS256.txt` is in
`SHASUMS256.txt.sig`. You can use it with `gpg` to verify the integrity of
`SHASUMS256.txt`. You will first need to import
[the GPG keys of individuals authorized to create releases](#release-keys). To
import the keys:

```console
$ gpg --keyserver pool.sks-keyservers.net --recv-keys DD8F2338BAE7501E3DD5AC78C273792F7D83545D
```

See the bottom of this README for a full script to import active release keys.

Next, download the `SHASUMS256.txt.sig` for the release:

```console
$ curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt.sig
```

Then use `gpg --verify SHASUMS256.txt.sig SHASUMS256.txt` to verify
the file's signature.

## Building Node.js

See [BUILDING.md](BUILDING.md) for instructions on how to build Node.js from
source and a list of supported platforms.

## Security

For information on reporting security vulnerabilities in Node.js, see
[SECURITY.md](./SECURITY.md).

## Contributing to Node.js

* [Contributing to the project][]
* [Working Groups][]
* [Strategic initiatives][]
* [Technical values and prioritization][]

<details>
<summary>Emeriti</summary>

<!-- find-inactive-collaborators.mjs depends on the format of the emeriti list.
     If the format changes, those utilities need to be tested and updated. -->

### Collaborator emeriti

* [andrasq](https://github.com/andrasq) -
  **Andras** <<andras@kinvey.com>>
* [AnnaMag](https://github.com/AnnaMag) -
  **Anna M. Kedzierska** <<anna.m.kedzierska@gmail.com>>
* [AndreasMadsen](https://github.com/AndreasMadsen) -
  **Andreas Madsen** <<amwebdk@gmail.com>> (he/him)
* [aqrln](https://github.com/aqrln) -
  **Alexey Orlenko** <<eaglexrlnk@gmail.com>> (he/him)
* [bmeurer](https://github.com/bmeurer) -
  **Benedikt Meurer** <<benedikt.meurer@gmail.com>>
* [bnoordhuis](https://github.com/bnoordhuis) -
  **Ben Noordhuis** <<info@bnoordhuis.nl>>
* [brendanashworth](https://github.com/brendanashworth) -
  **Brendan Ashworth** <<brendan.ashworth@me.com>>
* [calvinmetcalf](https://github.com/calvinmetcalf) -
  **Calvin Metcalf** <<calvin.metcalf@gmail.com>>
* [chrisdickinson](https://github.com/chrisdickinson) -
  **Chris Dickinson** <<christopher.s.dickinson@gmail.com>>
* [claudiorodriguez](https://github.com/claudiorodriguez) -
  **Claudio Rodriguez** <<cjrodr@yahoo.com>>
* [DavidCai1993](https://github.com/DavidCai1993) -
  **David Cai** <<davidcai1993@yahoo.com>> (he/him)
* [digitalinfinity](https://github.com/digitalinfinity) -
  **Hitesh Kanwathirtha** <<digitalinfinity@gmail.com>> (he/him)
* [eljefedelrodeodeljefe](https://github.com/eljefedelrodeodeljefe) -
  **Robert Jefe Lindstaedt** <<robert.lindstaedt@gmail.com>>
* [estliberitas](https://github.com/estliberitas) -
  **Alexander Makarenko** <<estliberitas@gmail.com>>
* [firedfox](https://github.com/firedfox) -
  **Daniel Wang** <<wangyang0123@gmail.com>>
* [Fishrock123](https://github.com/Fishrock123) -
  **Jeremiah Senkpiel** <<fishrock123@rocketmail.com>> (he/they)
* [gdams](https://github.com/gdams) -
  **George Adams** <<gadams@microsoft.com>> (he/him)
* [geek](https://github.com/geek) -
  **Wyatt Preul** <<wpreul@gmail.com>>
* [gibfahn](https://github.com/gibfahn) -
  **Gibson Fahnestock** <<gibfahn@gmail.com>> (he/him)
* [glentiki](https://github.com/glentiki) -
  **Glen Keane** <<glenkeane.94@gmail.com>> (he/him)
* [iarna](https://github.com/iarna) -
  **Rebecca Turner** <<me@re-becca.org>>
* [imran-iq](https://github.com/imran-iq) -
  **Imran Iqbal** <<imran@imraniqbal.org>>
* [imyller](https://github.com/imyller) -
  **Ilkka Myller** <<ilkka.myller@nodefield.com>>
* [isaacs](https://github.com/isaacs) -
  **Isaac Z. Schlueter** <<i@izs.me>>
* [italoacasas](https://github.com/italoacasas) -
  **Italo A. Casas** <<me@italoacasas.com>> (he/him)
* [jasongin](https://github.com/jasongin) -
  **Jason Ginchereau** <<jasongin@microsoft.com>>
* [jbergstroem](https://github.com/jbergstroem) -
  **Johan Bergström** <<bugs@bergstroem.nu>>
* [jdalton](https://github.com/jdalton) -
  **John-David Dalton** <<john.david.dalton@gmail.com>>
* [jhamhader](https://github.com/jhamhader) -
  **Yuval Brik** <<yuval@brik.org.il>>
* [joshgav](https://github.com/joshgav) -
  **Josh Gavant** <<josh.gavant@outlook.com>>
* [julianduque](https://github.com/julianduque) -
  **Julian Duque** <<julianduquej@gmail.com>> (he/him)
* [kfarnung](https://github.com/kfarnung) -
  **Kyle Farnung** <<kfarnung@microsoft.com>> (he/him)
* [kunalspathak](https://github.com/kunalspathak) -
  **Kunal Pathak** <<kunal.pathak@microsoft.com>>
* [lance](https://github.com/lance) -
  **Lance Ball** <<lball@redhat.com>> (he/him)
* [lucamaraschi](https://github.com/lucamaraschi) -
  **Luca Maraschi** <<luca.maraschi@gmail.com>> (he/him)
* [lxe](https://github.com/lxe) -
  **Aleksey Smolenchuk** <<lxe@lxe.co>>
* [maclover7](https://github.com/maclover7) -
  **Jon Moss** <<me@jonathanmoss.me>> (he/him)
* [matthewloring](https://github.com/matthewloring) -
  **Matthew Loring** <<mattloring@google.com>>
* [micnic](https://github.com/micnic) -
  **Nicu Micleușanu** <<micnic90@gmail.com>> (he/him)
* [mikeal](https://github.com/mikeal) -
  **Mikeal Rogers** <<mikeal.rogers@gmail.com>>
* [misterdjules](https://github.com/misterdjules) -
  **Julien Gilli** <<jgilli@netflix.com>>
* [monsanto](https://github.com/monsanto) -
  **Christopher Monsanto** <<chris@monsan.to>>
* [MoonBall](https://github.com/MoonBall) -
  **Chen Gang** <<gangc.cxy@foxmail.com>>
* [not-an-aardvark](https://github.com/not-an-aardvark) -
  **Teddy Katz** <<teddy.katz@gmail.com>> (he/him)
* [ofrobots](https://github.com/ofrobots) -
  **Ali Ijaz Sheikh** <<ofrobots@google.com>> (he/him)
* [Olegas](https://github.com/Olegas) -
  **Oleg Elifantiev** <<oleg@elifantiev.ru>>
* [orangemocha](https://github.com/orangemocha) -
  **Alexis Campailla** <<orangemocha@nodejs.org>>
* [othiym23](https://github.com/othiym23) -
  **Forrest L Norvell** <<ogd@aoaioxxysz.net>> (they/them/themself)
* [petkaantonov](https://github.com/petkaantonov) -
  **Petka Antonov** <<petka_antonov@hotmail.com>>
* [phillipj](https://github.com/phillipj) -
  **Phillip Johnsen** <<johphi@gmail.com>>
* [piscisaureus](https://github.com/piscisaureus) -
  **Bert Belder** <<bertbelder@gmail.com>>
* [pmq20](https://github.com/pmq20) -
  **Minqi Pan** <<pmq2001@gmail.com>>
* [princejwesley](https://github.com/princejwesley) -
  **Prince John Wesley** <<princejohnwesley@gmail.com>>
* [psmarshall](https://github.com/psmarshall) -
  **Peter Marshall** <<petermarshall@chromium.org>> (he/him)
* [refack](https://github.com/refack) -
  **Refael Ackermann (רפאל פלחי)** <<refack@gmail.com>> (he/him/הוא/אתה)
* [rlidwka](https://github.com/rlidwka) -
  **Alex Kocharin** <<alex@kocharin.ru>>
* [rmg](https://github.com/rmg) -
  **Ryan Graham** <<r.m.graham@gmail.com>>
* [robertkowalski](https://github.com/robertkowalski) -
  **Robert Kowalski** <<rok@kowalski.gd>>
* [romankl](https://github.com/romankl) -
  **Roman Klauke** <<romaaan.git@gmail.com>>
* [ronkorving](https://github.com/ronkorving) -
  **Ron Korving** <<ron@ronkorving.nl>>
* [RReverser](https://github.com/RReverser) -
  **Ingvar Stepanyan** <<me@rreverser.com>>
* [rubys](https://github.com/rubys) -
  **Sam Ruby** <<rubys@intertwingly.net>>
* [saghul](https://github.com/saghul) -
  **Saúl Ibarra Corretgé** <<s@saghul.net>>
* [sam-github](https://github.com/sam-github) -
  **Sam Roberts** <<vieuxtech@gmail.com>>
* [sebdeckers](https://github.com/sebdeckers) -
  **Sebastiaan Deckers** <<sebdeckers83@gmail.com>>
* [shigeki](https://github.com/shigeki) -
  **Shigeki Ohtsu** <<ohtsu@ohtsu.org>> (he/him)
* [stefanmb](https://github.com/stefanmb) -
  **Stefan Budeanu** <<stefan@budeanu.com>>
* [tellnes](https://github.com/tellnes) -
  **Christian Tellnes** <<christian@tellnes.no>>
* [thefourtheye](https://github.com/thefourtheye) -
  **Sakthipriyan Vairamani** <<thechargingvolcano@gmail.com>> (he/him)
* [thlorenz](https://github.com/thlorenz) -
  **Thorsten Lorenz** <<thlorenz@gmx.de>>
* [trevnorris](https://github.com/trevnorris) -
  **Trevor Norris** <<trev.norris@gmail.com>>
* [tunniclm](https://github.com/tunniclm) -
  **Mike Tunnicliffe** <<m.j.tunnicliffe@gmail.com>>
* [vkurchatkin](https://github.com/vkurchatkin) -
  **Vladimir Kurchatkin** <<vladimir.kurchatkin@gmail.com>>
* [vsemozhetbyt](https://github.com/vsemozhetbyt) -
  **Vse Mozhet Byt** <<vsemozhetbyt@gmail.com>> (he/him)
* [whitlockjc](https://github.com/whitlockjc) -
  **Jeremy Whitlock** <<jwhitlock@apache.org>>
* [yhwang](https://github.com/yhwang) -
  **Yihong Wang** <<yh.wang@ibm.com>>
* [yorkie](https://github.com/yorkie) -
  **Yorkie Liu** <<yorkiefixer@gmail.com>>

</details>

<!--lint enable prohibited-strings-->

Collaborators follow the [Collaborator Guide](./doc/guides/collaborator-guide.md) in
maintaining the Node.js project.

### Triagers

* [Ayase-252](https://github.com/Ayase-252) -
  **Qingyu Deng** <<i@ayase-lab.com>>
* [himadriganguly](https://github.com/himadriganguly) -
  **Himadri Ganguly** <<himadri.tech@gmail.com>> (he/him)
* [iam-frankqiu](https://github.com/iam-frankqiu) -
  **Frank Qiu** <<iam.frankqiu@gmail.com>> (he/him)
* [marsonya](https://github.com/marsonya) -
  **Akhil Marsonya** <<akhil.marsonya27@gmail.com>> (he/him)
* [Mesteery](https://github.com/Mesteery) -
  **Mestery** <<mestery@pm.me>>
* [PoojaDurgad](https://github.com/PoojaDurgad) -
  **Pooja Durgad** <<Pooja.D.P@ibm.com>>
* [RaisinTen](https://github.com/RaisinTen) -
  **Darshan Sen** <<raisinten@gmail.com>>
* [VoltrexMaster](https://github.com/VoltrexMaster) -
  **Mohammed Keyvanzadeh** <<mohammadkeyvanzade94@gmail.com>> (he/him)

### Release keys

Primary GPG keys for Node.js Releasers (some Releasers sign with subkeys):

* **Beth Griggs** <<bgriggs@redhat.com>>
  `4ED778F539E3634C779C87C6D7062848A1AB005C`
* **Colin Ihrig** <<cjihrig@gmail.com>>
  `94AE36675C464D64BAFA68DD7434390BDBE9B9C5`
* **Danielle Adams** <<adamzdanielle@gmail.com>>
  `74F12602B6F1C4E913FAA37AD3A89613643B6201`
* **James M Snell** <<jasnell@keybase.io>>
  `71DCFD284A79C3B38668286BC97EC7A07EDE3FC1`
* **Michaël Zasso** <<targos@protonmail.com>>
  `8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600`
* **Myles Borins** <<myles.borins@gmail.com>>
  `C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8`
* **Richard Lau** <<rlau@redhat.com>>
  `C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C`
* **Rod Vagg** <<rod@vagg.org>>
  `DD8F2338BAE7501E3DD5AC78C273792F7D83545D`
* **Ruben Bridgewater** <<ruben@bridgewater.de>>
  `A48C2BEE680E841632CD4E44F07496B3EB3C1762`
* **Ruy Adorno** <<ruyadorno@hotmail.com>>
  `108F52B48DB57BB0CC439B2997B01419BD92F80A`
* **Shelley Vohr** <<shelley.vohr@gmail.com>>
  `B9E2F5981AA6E0CD28160D9FF13993A75599653C`

To import the full set of trusted release keys (including subkeys possibly used
to sign releases):

```bash
gpg --keyserver pool.sks-keyservers.net --recv-keys 4ED778F539E3634C779C87C6D7062848A1AB005C
gpg --keyserver pool.sks-keyservers.net --recv-keys 94AE36675C464D64BAFA68DD7434390BDBE9B9C5
gpg --keyserver pool.sks-keyservers.net --recv-keys 74F12602B6F1C4E913FAA37AD3A89613643B6201
gpg --keyserver pool.sks-keyservers.net --recv-keys 71DCFD284A79C3B38668286BC97EC7A07EDE3FC1
gpg --keyserver pool.sks-keyservers.net --recv-keys 8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600
gpg --keyserver pool.sks-keyservers.net --recv-keys C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8
gpg --keyserver pool.sks-keyservers.net --recv-keys C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C
gpg --keyserver pool.sks-keyservers.net --recv-keys DD8F2338BAE7501E3DD5AC78C273792F7D83545D
gpg --keyserver pool.sks-keyservers.net --recv-keys A48C2BEE680E841632CD4E44F07496B3EB3C1762
gpg --keyserver pool.sks-keyservers.net --recv-keys 108F52B48DB57BB0CC439B2997B01419BD92F80A
gpg --keyserver pool.sks-keyservers.net --recv-keys B9E2F5981AA6E0CD28160D9FF13993A75599653C
```

See the section above on [Verifying Binaries](#verifying-binaries) for how to
use these keys to verify a downloaded file.

<details>

<summary>Other keys used to sign some previous releases</summary>

* **Chris Dickinson** <<christopher.s.dickinson@gmail.com>>
  `9554F04D7259F04124DE6B476D5A82AC7E37093B`
* **Danielle Adams** <<adamzdanielle@gmail.com>>
  `1C050899334244A8AF75E53792EF661D867B9DFA`
* **Evan Lucas** <<evanlucas@me.com>>
  `B9AE9905FFD7803F25714661B63B535A4C206CA9`
* **Gibson Fahnestock** <<gibfahn@gmail.com>>
  `77984A986EBC2AA786BC0F66B01FBB92821C587A`
* **Isaac Z. Schlueter** <<i@izs.me>>
  `93C7E9E91B49E432C2F75674B0A78B0A6C481CF6`
* **Italo A. Casas** <<me@italoacasas.com>>
  `56730D5401028683275BD23C23EFEFE93C4CFFFE`
* **Jeremiah Senkpiel** <<fishrock@keybase.io>>
  `FD3A5288F042B6850C66B31F09FE44734EB7990E`
* **Julien Gilli** <<jgilli@fastmail.fm>>
  `114F43EE0176B71C7BC219DD50A3051F888C628D`
* **Timothy J Fontaine** <<tjfontaine@gmail.com>>
  `7937DFD2AB06298B2293C3187D33FF9D0246406D`

</details>

## License

Node.js is available under the
[MIT license](https://opensource.org/licenses/MIT). Node.js also includes
external libraries that are available under a variety of licenses.  See
[LICENSE](https://github.com/nodejs/node/blob/HEAD/LICENSE) for the full
license text.

[Code of Conduct]: https://github.com/nodejs/admin/blob/HEAD/CODE_OF_CONDUCT.md
[Contributing to the project]: CONTRIBUTING.md
[Node.js Website]: https://nodejs.org/
[OpenJS Foundation]: https://openjsf.org/
[Strategic initiatives]: doc/guides/strategic-initiatives.md
[Technical values and prioritization]: doc/guides/technical-values.md
[Working Groups]: https://github.com/nodejs/TSC/blob/HEAD/WORKING_GROUPS.md
