export default function Home() {
  const rows = 6;
  const cols = 5;
  


  return (
  <div>
    <div className="grid content-center">
      {Array.from({ length: rows}).map((_, index) => (
        <div key={index}>
          {Array.from({length: cols}).map((_, colIndex)=> (<input key={colIndex}/>))}
        </div>))
      }
    </div>
  </div>

  );
}
