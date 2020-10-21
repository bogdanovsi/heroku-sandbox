import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Row,
    Col,
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList && e.fileList.map(file=> file.originFileObj);
};

class Zip extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.onFinish = this.onFinish.bind(this);
    }

    onFinish(values) {
        console.log('Received values of form: ', values);

        fetch('/zip_file', {
            method: 'POST',
            body: {
                files: values.dragger
            }
          }).then(res => res.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = 'itmo.zip';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
    };

    render() {
        return (
            <div style={{ paddingTop: '50px' }}>

                <Form
                    action="zip_file"
                    name="validate_other"
                    {...formItemLayout}
                    onFinish={this.onFinish}
                    initialValues={{
                        ['input-number']: 3,
                        ['checkbox-group']: ['A', 'B'],
                        rate: 3.5,
                    }}
                >
                    <Form.Item
                    >
                        <p>Загрузите файл для архивации</p>
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                            <Upload.Dragger
                                name="files"
                                multiple={false}
                                customRequest={({ props, onSuccess }) => { onSuccess("ok"); }}
                             >
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit">
                            Архивировать
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Zip;