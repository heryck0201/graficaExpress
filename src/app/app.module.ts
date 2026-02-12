import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarrocelComponent } from './sharepage/carrocel/carrocel.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LojaComponent } from './pages/loja/loja.component';
import { TecnologiasImpressaoComponent } from './components/tecnologias-impressao/tecnologias-impressao.component';
import { OQueFazemosComponent } from './o-que-fazemos/o-que-fazemos.component';
import { ProcuradosComponent } from './components/procurados/procurados.component';
import { CtaOrcamentoComponent } from './components/cta-orcamento/cta-orcamento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CarrocelComponent,
    ProductDetailsComponent,
    LojaComponent,
    TecnologiasImpressaoComponent,
    OQueFazemosComponent,
    ProcuradosComponent,
    CtaOrcamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
