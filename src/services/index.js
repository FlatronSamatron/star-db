export default class SwapiService {

    _apiBase = 'https://api.opendota.com/api/heroStats'
  
    async getReasourse(){
      const res = await fetch(`${this._apiBase}`);
  
      if(!res.ok) {
        throw new Error('not fetch')
      }
  
      const body = await res.json();
      return body
    }
  
    getAgiHeroes = async()=>{
      const res =  await this.getReasourse()
      const hero = res.filter( hero => hero.primary_attr === 'agi' )
      return hero.map( el => this._transformAllHero(el))
    }
  
    getStrHeroes = async()=>{
      const res =  await this.getReasourse()
      const hero = res.filter( hero => hero.primary_attr === 'str' )
      return hero.map( el => this._transformAllHero(el))
    }
  
    getIntHeroes = async()=>{
      const res =  await this.getReasourse()
      const hero = res.filter( hero => hero.primary_attr === 'int' )
      return hero.map( el => this._transformAllHero(el))
    }
  
    getAllHero = async ()=>{
      const res =  await this.getReasourse()
      return res.map( el => this._transformAllHero(el))
    }
  
    getHero = async(id)=>{
      const res =  await this.getReasourse()
      const hero = res.filter( hero => hero.id === id).length === 0 ? [res[5]] : res.filter( hero =>  hero.id === id)
      return this._transformHero(hero)
    }

    _transformHero = (hero) => {
      return {
        id: hero[0].id,
        name: hero[0].localized_name ,
        attackType: hero[0].attack_type ,
        role: hero[0].roles.map((el,i,arr)=> i === arr.length-1 ? el : el+', '),
        atr:  hero[0].primary_attr ,
        img:  'https://api.opendota.com'+hero[0].img, // img or icon
      }
    }

    _transformAllHero = (hero) => {
      return {
        id: hero.id,
        name: hero.localized_name ,
        attackType: hero.attack_type ,
        role: hero.roles.map((el,i,arr)=> i === arr.length-1 ? el : el+', '),
        atr:  hero.primary_attr ,
        img:  'https://api.opendota.com'+hero.img,
        icon: 'https://api.opendota.com'+hero.icon
      }
    }

    // _transformHero(hero){
    //   return {
    //     name: hero ? hero.localized_name : 'Crystal Maiden',
    //     attackType: hero ? hero.attack_type : 'Ranged',
    //     role: hero? hero.roles.map((el,i,arr)=> i === arr.length-1 ? el : el+', ') : ['Support', 'Disabler', 'Nuker', 'Jungler'],
    //     atr: hero ? hero.primary_attr : 'Intelligence',
    //     img: hero ? 'https://api.opendota.com'+hero.img : 'https://api.opendota.com/apps/dota2/images/heroes/crystal_maiden_full.png', // img or icon
    //   }
    // }
  
  }
  
  // const swapi = new(SwapiService)
  
  // swapi.getHero(5).then((body)=>{console.log(body)})


  // class SwapiService {

//   _apiBase = 'https://swapi.dev/api'

//   async getReasourse(url){
//     const res = await fetch(`${this._apiBase}${url}`);

//     if(!res.ok) {
//       throw new Error('not fetch')
//     }

//     const body = await res.json();
//     return body
//   }

//   async getAllPeaople(){
//     const res =  await this.getReasourse(`/people/`)
//     return res.results
//   }

//   getPerson(id){
//     return this.getReasourse(`/people/${id}`)
//   }

//   async getAllPlanets(){
//     const res =  await this.getReasourse(`/planets/`)
//     return res.results
//   }

//   getPlanet(id){
//     return this.getReasourse(`/planet/${id}`)
//   }

//   async getAllStarships(){
//     const res =  await this.getReasourse(`/starships/`)
//     return res.results
//   }

//   getStarship(id){
//     return this.getReasourse(`/starships/${id}`)
//   }

// }

// const swapi = new(SwapiService)

// swapi.getAllPlanets().then((body)=>{console.log(body)})