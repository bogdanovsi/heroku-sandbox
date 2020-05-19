import React, { Component, useForm } from 'react';
import { Form, Input, Checkbox, Button, DatePicker, InputNumber } from 'antd';
import SelectCollection from '../../SelectWriters';
import moment from 'moment';

import { DATE_FORMAT } from '../../../constants';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const EditCustomers = ({currentData}) => {
  const [form] = Form.useForm();
  const onFinish = values => {    
    fetch(`/customers/${currentData._id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(values)
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if(currentData) {
    form.setFieldsValue(currentData);
  }

  return (
    <Form
      action="customer"
      method="post"
      {...layout}
      name="basic"
      initialValues={currentData}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="customer_name"
        rules={[
          {
            required: true,
            message: 'Please input name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input address',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone number"
        name="phone_number"
        rules={[
          {
            required: true,
            message: 'Please input phone number',
          },
        ]}
      >
        <Input />
      </Form.Item>

      
      <Form.Item
        label="Contact person"
        name="contact_person"
        rules={[
          {
            required: true,
            message: 'Please input contact person',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditCustomers;