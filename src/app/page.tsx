import Link from "next/link";
import { redirect } from 'next/navigation'



export default function Home() {

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  switch (timeZone) {
    case 'America/Costa_Rica':
      redirect('/cr');
    break;
    case  'America/Managua':
      redirect('/ni');
    break;
    default:
      redirect('/cam');
  }


  return (
    <>
      <section className="content_home">
        <section className="box">
          <h1 title="Seleccione su región:">Seleccione su región  manualmente: </h1>
          <section className="all_countries">
            <Link href="/cr" title="Costa Rica">
              Costa Rica 
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </Link>
            <Link href="/ni" title="Nicaragua">
              Nicaragua
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </Link>
            <Link href="/cam" title="Cam">
              Centroamerica
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </Link>
          </section>
        </section>

        <section className="error">
          <p>No logramos obtener su ubicación, por favor seleccione el país manualmente.</p>
        </section>

      </section>
    </>
  )
}