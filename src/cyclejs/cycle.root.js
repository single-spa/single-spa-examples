/** @jsx html */
import {div, makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import {html} from 'snabbdom-jsx';

export default function App (sources) {

  const getAStarWars$ = sources.DOM
    .select('.star-wars-input')
    .events('keyup')
    .map( e => e.target.value )
    .filter( val => val.length > 1 )
    .map( query => ({
      url: `https://swapi.co/api/people/?search=${query.toLowerCase()}`,
      category: 'result',
      method: 'GET'
    })
  )

  const result$ = sources.HTTP.select('result')
  .flatten()
  .map(response=>{
    return response.body
  })
  .startWith(null)
  

  const vtree$ = result$.map(resp=>
    <div style={{width:"100%", textAlign: 'center'}}>
      <h3>This is CycleJS</h3>
      <input
        style={{width: "300px"}}
        className="star-wars-input"
      />
      <ul>
        { resp 
          ? list(resp.results)
          : <li>type a star wars</li>
        }
      </ul>
    </div>
  )

  const list = results => results.map( result =>
    <li style={{marginBottom: "15px"}}>
      <div><strong>Name:</strong> {result.name}</div>
      <div><strong>Height:</strong> {result.height}cm</div>
      <div><strong>Hair:</strong> {result.hair_color}</div>
      <div><strong>Born:</strong> {result.birth_year}</div>
    </li>
  )

  const sinks = {
    DOM: vtree$,
    HTTP: getAStarWars$
  }
  return sinks  
}

export const driversWithDomNode = root => {
  return {
    DOM: makeDOMDriver(root),
    HTTP: makeHTTPDriver()
  }
}
