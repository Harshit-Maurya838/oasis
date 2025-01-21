import React from 'react';
import Accordin from '../utils/according.utils.component';
import '../../styles/utils/utils.styles.css';
import '../../styles/faq/main.faq.styles.css';
import '../../styles/faq/responsive.faq.styles.css';

function FaQ() {
  return (
    <div className='FaQ' >
      <div className="content">
        <span className='heading-04' >We have got the answers to your questions</span>
        <Accordin
          number='01'
          question='What types of furniture do you offer?'
          answer='We offer a wide range of contemporary furniture including sofas, chairs, tables, beds, storage solutions, and outdoor furniture. Our collection is designed to suit modern aesthetics and functional needs.'
        />
        <Accordin
          number='02'
          question='Do you offer international shipping?'
          answer='We offer a wide range of contemporary furniture including sofas, chairs, tables, beds, storage solutions, and outdoor furniture. Our collection is designed to suit modern aesthetics and functional needs.'
        />
        <Accordin
          number='03'
          question='What is your return policy?'
          answer='We offer a wide range of contemporary furniture including sofas, chairs, tables, beds, storage solutions, and outdoor furniture. Our collection is designed to suit modern aesthetics and functional needs.'
        />
        <Accordin
          number='04'
          question='What payment methods do you accept?'
          answer='We accept major credit cards (Visa, MasterCard, American Express), PayPal, and financing options through Affirm. All transactions are secure and encrypted'
        />
      </div>
    </div>
  )
}

export default FaQ