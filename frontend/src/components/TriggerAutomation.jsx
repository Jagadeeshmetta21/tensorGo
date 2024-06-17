import React from 'react';
import { triggerAutomation } from '../services/api.service';

const TriggerAutomation = () => {
  const handleTriggerAutomation = async () => {
    try {
      await triggerAutomation();
      console.log('Zapier automation triggered successfully');
    } catch (error) {
      console.error('Error triggering Zapier automation:', error);
    }
  };

  return (
    <div>
      <button onClick={handleTriggerAutomation}>Trigger Automation</button>
    </div>
  );
};

export default TriggerAutomation;