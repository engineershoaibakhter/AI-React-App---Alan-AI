import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = 'e0374276f2684efcfbc2028327ba8d002e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  useEffect(() => {
    try {
      console.log("alan now")
      const alanInstance = alanBtn({
        
        key: alanKey,
        onCommand: ({ command }) => {
          console.log(`Received command: ${command}`);
          if (command === 'testCommand') {
            alert('Hello');
          }
        },
        onError: (error) => {
          console.error('Alan AI error:', error);
        },
      });

      return () => {
        // Cleanup the Alan AI instance when the component unmounts
        alanInstance.deactivate();
      };
    } catch (error) {
      console.error('Error initializing Alan AI:', error);
    }
  }, []);

  return (
    <div>
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
