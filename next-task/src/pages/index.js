import BookMarks from './components/BookMarks';
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
    </div>
  );
}
