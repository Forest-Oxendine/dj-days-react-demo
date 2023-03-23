import './App.css';
import Header from './Components/Header';
import AlbumMessage from './Components/AlbumMessage';
import AlbumListing from './Components/AlbumListing';

function App(props) {
  return (
    <>
    <Header HeaderContent="Dj Days React Demo"/>
    <AlbumMessage MessageContent="You need more albums!"/>
    <AlbumListing 
    AlbumName="Lemonade"
    AlbumArtist="Beyonce"
    AlbumGenre="RnB"
    />
    <AlbumListing 
        AlbumName="DAMN"
        AlbumArtist="Kendrick Lamar"
        AlbumGenre="Rap"
    />
    <AlbumListing 
        AlbumName="Back To Black"
        AlbumArtist="Amy Winehouse"
        AlbumGenre="RnB"
    />
    </>
  );
}

export default App;
