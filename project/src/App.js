import "./App.css";
import Books from "./components/book/Books";
import ChildrenProp from "./components/test/childrenProp";
import AddNewBook from "./components/new-book/AddNewBook";

function App() {
  const firstBook = [
    {
      img: "https://loremflickr.com/320/241",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/242",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/243",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/244",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/245",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/246",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/247",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/248",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      img: "https://loremflickr.com/320/249",
      title: "Atomic Habits",
      author: "James Clear",
    },
  ];
  return (
    <div className="container">
      <AddNewBook />
      <div className="book_wrapper">
        {firstBook.map((books, index) => {
          return (
            <Books
              img={books.img}
              title={books.title}
              author={books.author}
              key={index}
            />
          );
        })}
      </div>
      <br />
      <ChildrenProp>About Us</ChildrenProp>
      <br />
      <ChildrenProp children={<Books />} />
    </div>
  );
}

export default App;
