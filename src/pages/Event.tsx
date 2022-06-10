import {Button, Layout, Modal, Row} from 'antd';
import React from 'react';
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useAppDispatch} from "../store/store";
import {createIEvent, fetchEvents, fetchGuests} from "../store/slices/event/asyncAction";
import {useSelector} from "react-redux";
import {selectEvent} from "../store/slices/event/selectors";
import {IEvent} from "../store/slices/event/types";
import {selectAllAuth} from "../store/slices/auth/selectors";



const Event: React.FC = () => {

    const [modalVisible, setModalVisible] = React.useState(false);
    const dispatch = useAppDispatch();
    const {guests, events} = useSelector(selectEvent);
    const {user} = useSelector(selectAllAuth);

    React.useEffect(() => {
        dispatch(fetchGuests());
        dispatch(fetchEvents(user.username));
    }, []);

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        dispatch(createIEvent(event));
    }

    return (
      <Layout>
          <EventCalendar events={events}/>
          <Row justify='center'>
              <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
          </Row>
          <Modal
            title='Добавить событие'
            visible={modalVisible}
            footer={null}
            onCancel={() => setModalVisible(false)}>
                <EventForm guests={guests} submit={addNewEvent}/>
          </Modal>
      </Layout>
    );
}

export default Event;