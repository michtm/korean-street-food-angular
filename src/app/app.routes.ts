import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrderNowComponent } from './components/order-now/order-now.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', title: 'Korean Street Food | Accueil', component: HomeComponent },
    { path: 'food-menu', title: 'Korean Street Food | Menu', component: FoodMenuComponent },
    { path: 'contact', title: 'Korean Street Food | Contact', component: ContactComponent },
    { path: 'order-now', title: 'Korean Street Food | Commande', component: OrderNowComponent },
    { path: '**', title: 'Korean Street Food | 404', component: PageNotFoundComponent }
];
