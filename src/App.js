import React from "react";

import { Header } from './components/header';
import { Panel } from './components/panel';
import { Terminal } from './components/terminal';
import { Visualization } from './components/visualization';

import './App.css';

export default () => (
  <div className="container">
    <Header />

    <div className="container panels">

      <Panel name="left">
        <Terminal/>
      </Panel>

      <Panel name="right">
        <Visualization/>
      </Panel>

    </div>
  </div>
);

/**
 * Please see detailed comments in components/panel/panel.component.js
 * and elsewhere in the project.
 * 
 * For now, notice that <Panel>, <Terminal>, <Header> and <Visualization>
 * are components that are created as functions within the src/components
 * folder.
 * 
 * When you create a component, you can embed it in another component
 * with a html-like tag using the component's name.
 * 
 * Just like standard html tags, component tags either need to be 
 * opened and closed <tag>...some content </tag> OR 
 * have a single tag ending in a / like <tab/>
 * 
 * Also notice that <Terminal> and <Visualization> are passed between the open and close 
 * tags of <Panel> component tags.  This means you can embed
 *  <Terminal> and <Visualization> within the <Panel> component's output. 
 * This means that <Terminal> and <Visualization> tags in this instance 
 * are children of their respective <Panel> component.
 *
 * Inside the <Panel> component, you can access the childen using this notation: 
 * 
 * { props.children }  Please look at panel.component.js for the example.
 */