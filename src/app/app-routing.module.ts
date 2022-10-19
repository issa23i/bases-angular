import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostsModule } from './pages/posts/posts.module';


const routes: Routes= [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: HomeComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then (m => m.PostsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot ( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
