import React from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../store/slices/auth/types";
import {IEvent} from "../store/slices/event/types";
import {Moment} from "moment";
import {formatDate} from "../utils/date";
import {useSelector} from "react-redux";
import {selectAllAuth} from "../store/slices/auth/selectors";

interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void
}

const EventForm: React.FC<EventFormProps> = (props) => {

    const [event, setEvent] = React.useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent);

    const {user} = useSelector(selectAllAuth);

    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())});
        }
    }

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }

    return (
      <Form onFinish={submitForm}>
          <Form.Item label='Описание события' name='description' rules={[rules.required()]}>

              <Input
              value={event.description} onChange={e => setEvent({...event, description: e.target.value})}/>

          </Form.Item>
          <Form.Item label='Дата события' name='date' rules={[rules.required(), rules.isDateAfter('Нельзя создать событие в прошлом')]}>

              <DatePicker
                onChange={(date) => selectDate(date)}
              />

          </Form.Item>
          <Form.Item rules={[rules.required()]} label='Выберите гостя' name='guest'>

              <Select onChange={(guest: string) => setEvent({...event, guest})}>
                  {props.guests.map(guest => <Select.Option value={guest.username} key={guest.username}>{guest.username}</Select.Option>)}
              </Select>

          </Form.Item>
          <Row justify='end'>
              <Form.Item>

                  <Button type='primary' htmlType='submit' >Создать</Button>

              </Form.Item>
          </Row>
      </Form>
    );
}

export default EventForm;