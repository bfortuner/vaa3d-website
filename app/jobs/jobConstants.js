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
                     'channel' : 1,
                     'methods' : ['APP1', 'APP2'] 
              }
       }
})