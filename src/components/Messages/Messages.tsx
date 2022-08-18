import React from "react";
import classes from './Messages.module.css';

export const Messages = () => {
  return (
      <>
        <div className={classes.messages}>
            <div className={classes.dialogs}>
                <div>
                    Messages1
                </div>
                <div>
                    Messages2
                </div>
                <div>
                    Messages2
                </div>
            </div>

            <div className={classes.text}>
                <div>
                    Messages4
                </div>
                <div>
                    Messages5
                </div>
            </div>
        </div>
      </>
  );
}