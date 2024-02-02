import BookMarks from './components/BookMarks';
import Convert2PDF from './components/Convert2PDF';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Slider from './components/Slider';
export default function Home() {
  return (
    <div>
      <SearchBar />
      <Navbar />
      <BookMarks />
      <Slider />
      <Convert2PDF />
    </div>
  );
}
