'use strict';

vaad3dApp.constant('jobConstants', {
       'JOB_TYPES' : [
              'Neuron Tracing', 
              'Neuron Utilities'
       ],
       'JOB_TYPE_PLUGINS' : {
              'Neuron Tracing' : ['Vaa3D_Neuron2'],
              'Neuron Utilities' : ['None Available']
       },
       'PLUGINS' : {
              'Vaa3D_Neuron2' : {
                     'channel' : { 
                            'values' : ['1','2','3','4','5','6','7','8','9','10'],
                            'default' : '1'
                     },
                     'method' : {
                            'values' : ['app1', 'app2'],
                            'default' : 'app1'
                     } 
              }
       }
})