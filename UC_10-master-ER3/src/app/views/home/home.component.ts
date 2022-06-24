import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { User } from 'src/app/models/user';
import { NotiniasService } from 'src/app/services/notinias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private noticiasService:NotiniasService) { }

  listaNoticias = [] as Noticia[]

  ngOnInit(): void {
    this.carregarNoticias()
  }

  carregarNoticias(){
    this.noticiasService.getNoticias().subscribe( (noticiasRecebidas:Noticia[]) => {
      this.listaNoticias = noticiasRecebidas;
      console.log(this.listaNoticias);
    } )
  }
  userModel = new User("","")

  OnSubmit(){
    console.log(this.userModel)
  }

}
