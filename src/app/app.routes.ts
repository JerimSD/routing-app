import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './first/components/child-a/child-a.component';
import { ChildBComponent } from './first/components/child-b/child-b.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', children: [] }, // route path that doesn't load any component

    {
        path: 'first-component', // first level path
        title: 'First Component', // page title
        component: FirstComponent, // this is the component with the <router-outlet> in the template
        children: [
            {
                path: 'child-a', // child route path
                title: 'First Component - Child A', // child route title
                component: ChildAComponent, // child route component that the router renders
            },

            {
                path: 'child-b', // another child route path
                component: ChildBComponent, // another child route component that the router renders
            },

            { path: '**', children: [] } // any other child route path will not load any component
        ],
    },

    { path: 'second-component', title: 'Second Component', component: SecondComponent },

    { path: 'redirect', redirectTo: '/first-component', pathMatch: 'full' }, // route path that will redirect to another route path

    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }, // any other route path will load the PageNotFoundComponent
];
