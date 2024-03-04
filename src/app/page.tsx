// app/page.js
'use client';

import { useState } from 'react';
import Head from 'next/head';

interface Book {
  title: string;
  author: string;
  read: boolean;
}

const books = [
  { title: 'Tell Me Your Dreams', author: 'Sidney Sheldon', read: false },
  { title: 'The Death and Legacy of Martin Luther King Jr.', author: 'Jonathan Eig', read: false },
  { title: 'My Love, My Love', author: 'Rosa Guy', read: false },
  { title: 'The Heavens Might Crack', author: 'Jason Berry', read: false },
  { title: 'Years of Renewal', author: 'Henry Kissinger', read: false },
  { title: 'White House Years', author: 'Henry Kissinger', read: false },
  { title: 'Finding Me', author: 'Michelle Knight', read: false },
  { title: 'The Lady with the Borzoi', author: 'Laura Claridge', read: false },
  { title: 'Shoe Dog', author: 'Phil Knight', read: false },
  { title: 'Sons of Wichita', author: 'Daniel Schulman', read: false },
  { title: 'The Point of It All', author: 'Charles Krauthammer', read: false },
  { title: 'Amanda Knox', author: 'Amanda Knox', read: false },
  { title: 'If All the Seas Were Ink', author: 'Ilana Kurshan', read: false },
  { title: 'The Importance of Not Being Ernest', author: 'Mark Kurlansky', read: false },
  { title: 'The Will to Live', author: 'Elisabeth Kübler-Ross', read: false },
  { title: 'Breaking History', author: 'Jared Kushner', read: false },
  { title: 'Whipping Boy', author: 'Allen Kurzweil', read: false },
  { title: 'The Kneeling Man', author: 'Leta McCollough Seletzky', read: false },
  { title: 'My Thirty Years as an FBI Undercover Agent', author: 'John McEnroe', read: false },
  { title: 'But Seriously', author: 'John McEnroe', read: false },
  { title: 'Mary Queen of Scots', author: 'John Norris', read: false },
  { title: 'Ian McKellen', author: 'Garry O\'Connor', read: false },
  { title: 'Katie\'s Girl', author: 'Kathy O\'Beirne', read: false },
  { title: 'William McKinley', author: 'Phillip Kunhardt Jr.', read: false },
  { title: 'Sea Stories', author: 'William McRaven', read: false },
  { title: 'The Chef\'s Child', author: 'Timothy Keller', read: false },
  { title: 'I Was Told to Come Alone', author: 'Meryl Gordon', read: false },
  { title: 'The Immortal Irishman', author: 'Timothy Egan', read: false },
  { title: 'I\'ll Build a Stairway to Paradise', author: 'Gerald Clarke', read: false },
  { title: 'Bunny Mellon', author: 'Mac Griswold', read: false },
  { title: 'Love Warrior', author: 'Glennon Doyle Melton', read: false },
  { title: 'Melville in Love', author: 'Michael Shelden', read: false },
  { title: 'Of Discuss', author: 'Andrew Delbanco', read: false },
  { title: 'The Master of New America', author: 'Anthony Mendez', read: false },
  { title: 'Angela Merkel', author: 'Matthew Qvortrup', read: false },
  { title: 'Revere Beach Elegy', author: 'Kate Marr', read: false },
  { title: 'Potter', author: 'Robert Dallek', read: false },
  { title: 'The Measure of a Man', author: 'Sidney Blumenthal', read: false },
  { title: 'A Vast Design', author: 'Paul Halpern', read: false },
  { title: 'Mike Pompeo', author: 'Susan Glasser', read: false },
  { title: 'Never Give an Inch', author: 'Mike Pompeo', read: false },
  { title: 'Highly Improbable', author: 'Adam Piore', read: false },
  { title: 'The Education of an Idealist', author: 'Samantha Power', read: false },
  { title: 'Black Ops', author: 'Ric Prado', read: false },
  { title: 'The Black Girl', author: 'Peter Guralnick', read: false },
  { title: 'Careless Love', author: 'Peter Guralnick', read: false },
  { title: 'Elvis and Me', author: 'Priscilla Beaulieu Presley', read: false },
  { title: 'Rougell Magic', author: 'Georgia Pritchett', read: false },
  { title: 'One Man\'s Wilderness', author: 'Sam Keith', read: false },
  { title: 'Putin', author: 'Philip Short', read: false },
  { title: 'The Ingenuous Mr. Pyke', author: 'Henry Hemming', read: false },
  { title: 'The Adventures of Miss Barbara Pym', author: 'Paula Byrne', read: false },
  { title: 'Closing Time', author: 'Joe Queenan', read: false },
  { title: 'True West', author: 'Sam Shepard', read: false },
  { title: 'In Search of a Life', author: 'Mary Shelley', read: false },
  { title: 'The Scourge of War', author: 'Peter Sheridan', read: false },
  { title: 'Sherman', author: 'William Tecumseh Sherman', read: false },
  { title: 'There Was a Little Girl', author: 'Brooke Shields', read: false },
  { title: 'Eunice', author: 'Susan Richard Shreve', read: false },
  { title: 'Little Failure', author: 'Gary Shteyngart', read: false },
  { title: 'Nerves of Steel', author: 'Tammie Jo Shults', read: false },
  { title: 'American Scoundrel', author: 'David S. Brown', read: false },
  { title: 'Eleanor\'s Rebellion', author: 'Eleanor Smeal', read: false },
  { title: 'Cary Grant', author: 'Scott Eyman', read: false },
  { title: 'Touched by the Sun', author: 'Carly Simon', read: false },
  { title: 'Paul Simon', author: 'Robert Hilburn', read: false },
  { title: 'Homeward Bound', author: 'Peter Ames Carlin', read: false },
  { title: 'Open Book', author: 'Jessica Simpson', read: false },
  { title: 'The Word Detective', author: 'John Simpson', read: false },
  { title: 'The Way You Wear Your Hat', author: 'Bill Zehme', read: false },
  { title: 'All Signs Point to Paris', author: 'Natasha Sizlo', read: false },
  { title: 'Hungry Heart', author: 'Jennifer Weiner', read: false },
  { title: 'No Barkers', author: 'Auleta', read: false },
  { title: 'Hollywood Ending', author: 'Ken Auletta', read: false },
  { title: 'Listen Out Loud', author: 'Elie Wiesel', read: false },
  { title: 'Ida B.', author: 'Michelle Duster', read: false },
  { title: 'Like a Rolling Stone', author: 'Jann S. Wenner', read: false },
  { title: 'Ben Macintyre: Agent Son', author: 'Ben Macintyre', read: false },
  { title: 'Wharton', author: 'Hermione Lee', read: false },
  { title: 'Rebecca', author: 'Daphne du Maurier', read: false },
  { title: 'Privilege and Prejudice', author: 'Susan Mary Alsop', read: false },
  { title: 'The Suspicions of Mr. Whicher', author: 'Kate Summerscale', read: false },
  { title: 'Freedom\'s Detective', author: 'Charles Lane', read: false },
  { title: 'Betty White', author: 'David von Drehle', read: false },
  { title: 'White Lies', author: 'Michael D\'Antonio', read: false },
  { title: 'Baji', author: 'Elie Wiesel', read: false },
  { title: 'Wild in America', author: 'J.M. Fenster', read: false },
  { title: 'Prairie Fires', author: 'Caroline Fraser', read: false },
  { title: 'Laura Ingalls Wilder', author: 'Marta McDowell', read: false },
  { title: 'The World of Laura Ingalls Wilder', author: 'John E. Miller', read: false },
  { title: 'Pioneer Girl', author: 'Laura Ingalls Wilder', read: false },
  { title: 'Sisters and Rebels', author: 'Jacquelyn Dowd Hall', read: false },
  { title: 'Tiger & Phil', author: 'Bob Harig', read: false },
  { title: 'Everything Beautiful in Its Time', author: 'Jenna Bush Hager', read: false },
  { title: 'Up the Staircase', author: 'Lisa Hilton', read: false },
  { title: 'Dickens and Prince', author: 'Nick Hornby', read: false },
  { title: 'Spain in Our Hearts', author: 'Adam Hochschild', read: false },
  { title: 'The Boys', author: 'Ron Howard', read: false },
  { title: 'Imperfect Union', author: 'Steve Inskeep', read: false },
  { title: 'Say I\'m Dead', author: 'E. Dolores Johnson', read: false },
  { title: 'Johnson\'s Life of London', author: 'Boris Johnson', read: false },
  { title: 'Long Train Runnin\'', author: 'Tom Johnston', read: false },
  { title: 'Lefty & Tim', author: 'Bettye Kearse', read: false },
  { title: 'The Other Madisons', author: 'Bettye Kearse', read: false },
  { title: 'Kitty Kelley', author: 'Kitty Kelley', read: false },
  { title: 'Profiles in Courage', author: 'John F. Kennedy', read: false },
  { title: 'Jefferson\'s Daughters', author: 'Catherine Kerrison', read: false },
  { title: 'The Brothers', author: 'Stephen Kinzer', read: false },
  { title: 'An American Family', author: 'Khizr Khan', read: false },
  { title: 'Proving Katy', author: 'Kathy Kleiman', read: false },
];

interface BookItemProps {
  book: Book;
  toggleRead: (title: string) => void;
  isRead: boolean;
}

function BookItem({ book, toggleRead, isRead }: BookItemProps) {
  return (
    <li
      key={book.title + book.author}
      className={`cursor-pointer ${isRead ? 'line-through text-gray-400' : ''}`}
    >
      <button onClick={() => toggleRead(book.title)} className="w-full text-left">
        <span className="font-bold">{book.title}</span> by {book.author}
      </button>
    </li>
  );
}

export default function Page() {
  const [readBooks, setReadBooks] = useState<string[]>([]); // Corrected type definition

  const toggleRead = (title: string) => {
    setReadBooks((currentReadBooks) =>
      currentReadBooks.includes(title)
        ? currentReadBooks.filter((bookTitle) => bookTitle !== title)
        : [...currentReadBooks, title]
    );
  };

  return (
    <>
      <Head>
        <title>Book List</title>
        <meta name="description" content="Track books you have read" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Book List</h1>
        <p className="text-md text-gray-600 py-8 mt-2">
          Built by taking a quick 30 second video of a library bookshelf, and using Google Gemini 1.5 Pro to analyze the video and produce code for this prototype of an interactive reading list.
        </p>
        <ul className="list-disc ml-4">
          {books.map((book) => (
            <BookItem
              key={book.title + book.author}
              book={book}
              toggleRead={toggleRead}
              isRead={readBooks.includes(book.title)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}