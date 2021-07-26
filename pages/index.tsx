import Head from 'next/head'
import styled from 'styled-components';

const THEME = {
  colors: {
    red: '#e84a3f',
    orange: '#fea43e',
    yellow: '#ffdf2a',
    green: '#2bb970',
    blue: '#2d9fd6',
    purple: '#956cee',
  }
}

const MAX_WIDTH_PX = 960;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 50px;
  color: #fff;
`

const Header = styled.header`
  background-color: ${THEME.colors.purple};
  text-align: center;
  padding: 1.5rem;
`

const London = styled.div`
  margin: 0 -100vw;
  position: relative;
  height: 40vh;
  display: flex;

  &::before {
    display: block;
    height: 100%;
    flex-grow: 1;
    flex-basis: 0;
    margin-right: -10px;
    content: '';
    background-image: url(/lgbt-london-long-left.svg);
    background-size: auto 100%;
  }

  &::after {
    display: block;
    height: 100%;
    flex-grow: 1;
    flex-basis: 0;
    margin-left: -10px;
    content: '';
    background-image: url(/lgbt-london-long-right.svg);
    background-size: auto 100%;
  }

  > img {
    display: block;
    height: 100%;

    &.center {
      margin: 0 auto;
    }
  }
`

const MAIN = styled.main`
  max-width: ${MAX_WIDTH_PX}px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1.5rem 0 0;
`

const Logo = styled.img`
  display: block;
  margin: 2rem auto;
  border-radius: 20px;
  width: 100%;
  max-width: 300px;
`

const NAME = 'Queer 20s/30s London';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>{NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <div>
          <Title className="title">
            {NAME}
          </Title>
        </div>
      </Header>

      <MAIN>
        <div>
          <Logo src="/lgbt-london.svg" />
        </div>

        <p>
          <strong>{NAME}</strong> is a group for queer and questioning people
          in London that would like to meet-up or make friends in a safe space.
          We welcome anyone that identifies as LGBT+, or is questioning.
          And although our group primarily consists of people in their 20s and
          30s, we welcome you regardless of age.
        </p>

        <h2 id='events'>
          Events / Join Us!
        </h2>

        <p>
          Right now, we're currently hosting weekly meetups every Saturday at
          2:30pm - late in Green Park. Organizers typically arrive slightly
          before the start time, and pick out a spot and share it with our
          groups.
        </p>

        <p>
          If you are interested in joining us, we recommend that you join one of
          the following groups to be informed about our precise meetup
          locations, or to ask for directions if you get lost.
        </p>

        <ul>
          <li><a href='https://chat.whatsapp.com/ErbaPyOaKXFHbCKWSph7kI' target='_blank' rel='nofollow noreferrer noopener'>WhatsApp</a></li>
          <li><a href='https://signal.group/#CjQKIHnYVh1vlMopV8GxbYv9wmTaB4hA6nZVOl2GFFE4haVjEhB-VLWbec2cvQWxajPA6w1w' target='_blank' rel='nofollow noreferrer noopener'>Signal</a></li>
          <li><a href='https://discord.gg/pnGyfjh7VG' target='_blank' rel='nofollow noreferrer noopener'>Discord</a></li>
        </ul>

        <p>
          If you intend to join any of our online groups, or attend a meetup in
          person, you must follow our <a href='#rules'>rules</a>.
        </p>
        
        <h2 id='rules'>Rules</h2>

        <p>
          Our online and in-person spaces are intended to be a safe space for
          people in the community, and although we would love to not have to
          institute any rules, we've found that they are necessary to maintain
          the safety of the group.
        </p>

        <ul>
          <li>
            <strong>No PM-ing people without consent:</strong><br/>
            Before sending a private message to anyone on any of our online
            spaces, you must first get their permission in a public channel.
          </li>
          <li>
            <strong>No chasers:</strong><br/>
            (for example, if you're a straight man looking for a bi or trans
            girl, this group is not for you).
          </li>
          <li>
            <strong>No requesting money</strong>
          </li>
        </ul>

        <p>
          To that end, if you break any of the rules, organizers have the right
          and ability to warn, kick or ban you from any of the groups and
          in-person meetups.
        </p>

        <p>
          If you see someone acting inappropriately or breaking the rules
          (including behaviour over PM), please contact one of the admins ASAP.
        </p>

        <h2>Social</h2>

        <li><a href='https://www.instagram.com/lgbt_london/' target='_blank' rel='nofollow noreferrer noopener'>Instagram</a></li>


      </MAIN>

      <Footer>
        <London>
          <img className="center" src="/lgbt-london-long.svg" />
        </London>
      </Footer>
    </div>
  )
}
