import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterAmMdemo1SharedModule } from 'app/shared/shared.module';
import { JhipsterAmMdemo1CoreModule } from 'app/core/core.module';
import { JhipsterAmMdemo1AppRoutingModule } from './app-routing.module';
import { JhipsterAmMdemo1HomeModule } from './home/home.module';
import { JhipsterAmMdemo1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterAmMdemo1SharedModule,
    JhipsterAmMdemo1CoreModule,
    JhipsterAmMdemo1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterAmMdemo1EntityModule,
    JhipsterAmMdemo1AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterAmMdemo1AppModule {}
