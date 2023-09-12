/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';
import { BeerResponse } from './interface/beer.interface';
import { firstValueFrom, map } from 'rxjs';
import { AxiosAdapter } from 'src/common/adapter/axios.adapter';


@Injectable()
export class SeedService {
 

  constructor(private readonly http: AxiosAdapter) {}

  async executedBeerSeed(){
    const beerUrl = `https://api.punkapi.com/v2/beers?page=`;

    const data = [];

    for(let i =1; i< 6; i++){

     const beers_from_page = await this.http
     .get<any>(`${beerUrl}${i}&per_page=80`);

      console.log('beers_from_page ',beers_from_page)
      data.push(beers_from_page);
    }
    //console.log(data.length)
     
    return `Seed executed: ${data.length} registers...`;
  }
}
