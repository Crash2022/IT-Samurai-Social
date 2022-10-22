import React, {ChangeEvent} from "react";
import styles from './MyProfile.module.css';

export type ProfileStatusPropsType = {
    userId: number
    status: string
    updateUserStatus: (userId: number, status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditModeHandler = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditModeHandler = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.props.userId, this.state.status);
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={styles.content__status_text}>
                {
                    this.state.editMode
                        ?
                        <div>
                            <input type="text"
                                   value={this.state.status}
                                   onChange={this.onStatusChange}
                                   onBlur={this.deactivateEditModeHandler}
                                   autoFocus={true}
                            />
                        </div>
                        :
                        <div>
                            <span onDoubleClick={this.activateEditModeHandler}>
                                {this.props.status || 'Тут будет твой статус'}
                            </span>
                        </div>
                }
            </div>
        );
    }
}