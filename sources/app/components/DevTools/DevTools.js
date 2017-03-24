import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor/lib/LogMonitor';
import DockMonitor from 'redux-devtools-dock-monitor/lib/DockMonitor';
import MultipleMonitors from 'redux-devtools-multiple-monitors';
import Dispatcher from 'redux-devtools-dispatch';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    changeMonitorKey='ctrl-m'
    defaultIsVisible={false}
    defaultPosition="left"
   >
    <MultipleMonitors>

      <LogMonitor
        expandActionRoot={false}
        expandStateRoot={false}
      />

      <Dispatcher />

    </MultipleMonitors>

  </DockMonitor>
);
