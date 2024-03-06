import React from 'react';
//import logo from './logo.svg';
import './App.css';
const bandNames = [
  {
    name: 'Rush',
    members: ['Geddy Lee', 'Alex Lifeson', 'Neil Peart'],
    formed: 1972,
  },
  {
    name: 'Led Zeppelin',
    members: ['Robert Plant', 'Jimmy Page', 'John Paul Jones', 'John Bonham'],
    formed: 1968,
  },
  {
    name: 'Duran Duran',
    members: [
      'Simon Le Bon',
      'Nick Rhodes',
      'John Taylor',
      'Roger Taylor',
      'Andy Taylor',
    ],
    formed: 1978,
  },
  {
    name: 'Nirvana',
    members: ['Kurt Cobain', 'Krist Novoselic', 'Dave Grohl'],
    formed: 1987,
  },
];

function Welcome() {
  return <h1>The Best Bands</h1>;
}

type BandProps = {
  name: string;
  members: string[];
  formed: number;
};

class Band extends React.Component<BandProps> {
  render() {
    const { name, members, formed } = this.props;

    return (
      <div>
        <img />
        <h2>{name}</h2>
        <h3>Members: {members}</h3>
        <h3>Formed: {formed}</h3>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      {bandNames.map((bandNum) => (
        <Band {...bandNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}
export default App;
