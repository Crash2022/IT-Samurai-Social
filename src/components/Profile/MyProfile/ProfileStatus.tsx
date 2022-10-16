import React from "react";
import classes from './MyProfile.module.css';

export type ProfileStatusPropsType = {
    title: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false
    }

    activateEditModeHandler() {
        this.setState({
            editMode: true
        });
    }

    deactivateEditModeHandler() {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div className={classes.content__status_text}>
                {
                    this.state.editMode
                        ?
                        <div>
                            <input type="text" value={this.props.title}
                                   onBlur={this.deactivateEditModeHandler.bind(this)}
                                    autoFocus={true}
                            />
                        </div>
                        :
                        <div>
                            <span onDoubleClick={this.activateEditModeHandler.bind(this)}>{this.props.title}</span>
                        </div>
                }
            </div>
        );
    }
}