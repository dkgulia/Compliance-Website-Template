'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Link,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import privacyPolicyStyles from './styles/privacyPolicyStyles';

const PrivacyPolicyPage = () => {
  const theme = useTheme();
  const styles = privacyPolicyStyles(theme);

  return (
    <Box sx={styles.containerStyle}>
      <Container maxWidth="lg">
        <Box sx={styles.headerBoxStyle as any}>
          <Typography
            variant="h1"
            sx={{ ...styles.headingStyle, ...styles.headerTitleStyle }}
          >
            Privacy Policy
          </Typography>
          <Typography sx={styles.headerDateStyle}>
            Effective Date: April 6, 2025 | Last Updated: April 6, 2025
          </Typography>
          <Typography sx={styles.headerDescriptionStyle}>
            At Hexafort, we value your privacy and are committed to protecting
            your personal data. This comprehensive privacy policy outlines how
            we collect, use, and safeguard your information.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="introduction">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            1. Introduction
          </Typography>
          <Box sx={styles.tableContainerStyle}>
            <Paper
              elevation={0}
              sx={{ borderRadius: '8px', overflow: 'hidden' }}
            >
              <Table sx={styles.tableStyle}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={styles.tableHeaderStyle}>
                      Version Number
                    </TableCell>
                    <TableCell sx={styles.tableHeaderStyle}>
                      Release Date
                    </TableCell>
                    <TableCell sx={styles.tableHeaderStyle}>
                      Description
                    </TableCell>
                    <TableCell sx={styles.tableHeaderStyle}>
                      Prepared By
                    </TableCell>
                    <TableCell sx={styles.tableHeaderStyle}>
                      Approved By
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1.0</TableCell>
                    <TableCell>1st December 2024</TableCell>
                    <TableCell>Initial Release</TableCell>
                    <TableCell>Siddharth K G</TableCell>
                    <TableCell>Sreerag V Menon</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2.0</TableCell>
                    <TableCell>6th April 2025</TableCell>
                    <TableCell>Updated terms</TableCell>
                    <TableCell>Siddharth K G</TableCell>
                    <TableCell>Sreerag V Menon</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Box>
        </Box>

        <Box sx={styles.sectionStyle}>
          <Typography variant="h2" sx={styles.subheadingStyle}>
            Introduction
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort Secure, we are committed to protecting your privacy and
            ensuring the security of your personal data. As a trusted
            enterprise-level cybersecurity solution, we recognize the critical
            importance of data confidentiality, integrity, and transparency in
            everything we do.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            This Privacy Policy outlines how we collect, use, store, and
            safeguard the personal information of our clients, website visitors,
            partners, and users of our platform and services. It also describes
            your rights under applicable data protection laws, including the
            General Data Protection Regulation (GDPR), and how you can exercise
            those rights.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort Secure provides cybersecurity and compliance solutions to
            organizations around the world, and we take our responsibility as a
            data processor and controller seriously. Whether you're browsing our
            website, engaging with our platform, or receiving our security
            services, you can trust that your data is handled with the highest
            standards of care and transparency.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            By using our website or services, you acknowledge that you have read
            and understood this Privacy Policy. If you do not agree with our
            practices, please refrain from using our services. For any questions
            or concerns regarding your data, we encourage you to reach out to
            our privacy team at{' '}
            <Link
              href="mailto:Privacy@hexafort.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
              Privacy@hexafort.io
            </Link>
            .
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="data-controller">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            2. Data Controller Details
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            For the purposes of applicable data protection laws, including the
            General Data Protection Regulation (EU) 2016/679 ("GDPR"), the
            entity responsible for determining the purposes and means of the
            processing of your personal data (the "Data Controller") is:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort Inc and its other subsidiaries
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Official Website:{' '}
            <Link
              href="https://hexafort.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
              https://hexafort.io
            </Link>
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Email:{' '}
            <Link
              href="mailto:Privacy@hexafort.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
              Privacy@hexafort.io
            </Link>
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Jurisdiction: United States, United Kingdom and India (with
            international service scope)
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort Secure Private Limited ("Hexafort", "we", "us", or "our")
            provides enterprise-grade cybersecurity and compliance services to
            organizations globally. In the course of delivering our services and
            operating our platform and website, we may collect, process, and
            manage personal data as a Data Controller.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We are committed to handling your data lawfully, fairly, and in a
            transparent manner, in accordance with the principles set out under
            the GDPR and other applicable privacy regulations. We also ensure
            that appropriate security measures are in place to protect your data
            against unauthorized access, disclosure, alteration, or destruction.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you have any questions about how your data is handled, or if you
            wish to exercise any of your rights under applicable data protection
            laws, please contact our privacy team at{' '}
            <Link
              href="mailto:Privacy@hexafort.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
              Privacy@hexafort.io
            </Link>
            .
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="contact-information">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            3. Contact Information
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort is committed to maintaining the highest standards of
            transparency, accountability, and compliance in handling personal
            data. If you have any questions, concerns, or requests regarding
            this Privacy Policy or your personal data, you are welcome to
            contact us using the information below.
          </Typography>

          <Box sx={styles.subsectionStyle}>
            <Typography variant="h3" sx={styles.subsubheadingStyle}>
              3.1. General Inquiries and Privacy-Related Questions
            </Typography>
            <Typography sx={styles.paragraphStyle}>
              For any general queries related to this Privacy Policy, or
              questions regarding how we collect, use, or protect your data,
              please contact:
            </Typography>
            <Typography sx={styles.paragraphStyle}>
              Email:{' '}
              <Link
                href="mailto:Privacy@hexafort.io"
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.linkStyle}
              >
                Privacy@hexafort.io
              </Link>
            </Typography>
            <Typography sx={styles.paragraphStyle}>
              Website:{' '}
              <Link
                href="https://hexafort.io"
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.linkStyle}
              >
                https://hexafort.io
              </Link>
            </Typography>
            <Typography sx={styles.paragraphStyle}>
              We aim to respond to all inquiries promptly and in accordance with
              applicable data protection laws such as the GDPR, UK GDPR, and
              India's Digital Personal Data Protection Act.
            </Typography>
          </Box>

          <Box sx={styles.subsectionStyle}>
            <Typography variant="h3" sx={styles.subsubheadingStyle}>
              3.2. Exercising Your Data Protection Rights
            </Typography>
            <Typography sx={styles.paragraphStyle}>
              If you wish to exercise your rights under applicable privacy
              regulations—such as the right to access, rectify, erase, or
              restrict your personal data—please send your request to:
            </Typography>
            <Typography sx={styles.paragraphStyle}>
              Email:{' '}
              <Link
                href="mailto:Privacy@hexafort.io"
                target="_blank"
                rel="noopener noreferrer"
                sx={styles.linkStyle}
              >
                Privacy@hexafort.io
              </Link>
            </Typography>
            <Typography sx={styles.paragraphStyle}>
              Subject Line: "Data Rights Request – [Your Name/Organization]"
            </Typography>
            <Typography sx={styles.paragraphStyle}>
              To ensure the security of your data, we may require you to provide
              proof of identity before fulfilling your request.
            </Typography>
          </Box>

          <Box sx={styles.subsectionStyle}>
            <Typography variant="h3" sx={styles.subsubheadingStyle}>
              3.3. Escalations and Compliance Oversight
            </Typography>
            <Typography sx={styles.paragraphStyle}>
              If your concern requires escalation or review by a privacy or
              compliance officer within Hexafort, our team will ensure your
              communication reaches the appropriate person or department.
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.sectionStyle} id="what-data-collected">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            4. What Personal Data is Collected
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we are committed to ensuring that any personal data we
            collect is done so with your consent and in compliance with
            applicable data protection laws, such as the General Data Protection
            Regulation (GDPR), the UK GDPR, and India's Digital Personal Data
            Protection Act. The personal data we collect is used solely for the
            purposes of providing our services, managing client relationships,
            improving our platform, and ensuring compliance with relevant
            regulations.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            4.1. Personal Data Collected on the Website
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            When you interact with our website, we collect personal data to help
            us better understand your needs and provide relevant services. The
            types of personal data we collect from you may include:
          </Typography>
          <Typography sx={styles.paragraphStyle}>Full Name</Typography>
          <Typography sx={styles.paragraphStyle}>Work Email Address</Typography>
          <Typography sx={styles.paragraphStyle}>
            Company Name (if applicable)
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Services You Are Interested In
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            This data is collected when you fill out forms on our website,
            request information, or contact us for services. It is used to
            initiate contact, provide details about our offerings, and tailor
            our communication to meet your needs. We ensure that this data is
            securely stored and processed.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            4.2. Personal Data Collected on the Platform
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you use Hexafort's platform, we collect additional personal data
            necessary for the functioning of our cybersecurity and compliance
            services. This may include, but is not limited to:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Account Information (username, password, user role)
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Company or Organization Data (for organizational accounts)
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Activity Data (logs, interactions with the platform, actions taken)
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Billing and Payment Information (for subscription-based services)
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            All personal data collected via our platform is stored securely
            using industry-standard encryption methods to ensure confidentiality
            and integrity. We apply appropriate safeguards to protect your data
            from unauthorized access or misuse.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            4.3. Data Retention and Deletion
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We value your privacy and are committed to maintaining your personal
            data only for as long as necessary. In the event of contract
            termination, we will securely store your personal data for a period
            not exceeding 30 days, after which it will be permanently deleted
            from our systems. This ensures that we comply with data retention
            principles while also maintaining the confidentiality and security
            of your information.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            4.4. Special Categories of Data
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort does not collect or process any special categories of
            personal data (e.g., sensitive data related to race, religion,
            health, or political opinions) unless explicitly required for
            specific service engagements or legal obligations, and always with
            your consent.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            4.5. Data Collection Methods
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Personal data is collected through the following means:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Directly from the information you provide when using our website or
            platform (e.g., during registration, inquiry forms, or support
            requests).
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Through the use of our platform, where activity data is
            automatically logged and processed.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Communication and correspondence through our customer service or
            sales team.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="how-data-collected">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            5. How Personal Data is Collected
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we value transparency and accountability in how we
            collect and process personal data. We only collect personal data in
            ways that are lawful, fair, and in accordance with the principles
            outlined in the General Data Protection Regulation (GDPR), the UK
            GDPR, and other applicable data protection laws.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We collect personal data using a variety of methods, which are
            outlined below. Our approach is designed to ensure that you are
            informed about how and why your data is being collected, and that
            your privacy rights are respected throughout the process.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            5.1. Direct Collection from You
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            The primary way we collect personal data is when you provide it
            directly to us. This may occur through various interactions with our
            website, platform, or communication channels. Examples of direct
            data collection include:
          </Typography>
          <Typography variant="h6" sx={styles.letterHeadingStyle}>
            A. Website Forms and Requests
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            When you visit our website and fill out forms, such as requesting a
            demo, asking for more information about our services, or subscribing
            to newsletters, we collect the personal data you provide. This
            typically includes:
          </Typography>
          <Typography sx={styles.paragraphStyle}>Full name</Typography>
          <Typography sx={styles.paragraphStyle}>Work email address</Typography>
          <Typography sx={styles.paragraphStyle}>
            Company name (if applicable)
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Services you are interested in
          </Typography>

          <Typography variant="h6" sx={styles.letterHeadingStyle}>
            B. Account Registration and Platform Use
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you create an account or subscribe to our services on the
            Hexafort platform, we collect personal data such as your username,
            password, and other necessary account-related information to ensure
            your access and security on the platform.
          </Typography>

          <Typography variant="h6" sx={styles.letterHeadingStyle}>
            C. Customer Support and Communication
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            When you communicate with us, such as submitting a support request
            or asking questions via email, phone, or chat, we collect personal
            data to respond to your inquiries, resolve issues, and provide
            assistance. This data may include:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Name and contact information
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Details of the issue or request
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Any supporting documents or information you share
          </Typography>

          <Typography variant="h6" sx={styles.letterHeadingStyle}>
            D. Marketing and Subscription Forms
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you subscribe to receive newsletters, promotional materials, or
            updates about our services, we collect the personal data you
            provide, such as your email address and any preferences related to
            the type of communications you wish to receive.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            5.2. Indirect Collection via Use of the Platform
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We may also collect certain personal data indirectly when you use
            our platform or services. This data is often collected automatically
            through technical means such as cookies, log files, and analytics
            tools. Examples of indirect data collection include:
          </Typography>
          <Typography variant="h6" sx={styles.letterHeadingStyle}>
            A. Technical Data
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            When you use the Hexafort platform or interact with our website, we
            automatically collect technical data to ensure the proper
            functioning of the services, improve the user experience, and
            enhance platform security. This data may include:
          </Typography>
          <Typography sx={styles.paragraphStyle}>IP address</Typography>
          <Typography sx={styles.paragraphStyle}>
            Browser type and version
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Device type and operating system
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Geolocation data (if applicable)
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Usage data (e.g., pages visited, actions taken on the platform)
          </Typography>

          <Typography variant="h6" sx={styles.letterHeadingStyle}>
            B. Cookies and Tracking Technologies
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We use cookies and similar tracking technologies to collect data
            about your interaction with our website. Cookies help us remember
            your preferences, improve our website's functionality, and provide
            you with a better browsing experience. You can control your cookie
            preferences through your browser settings, but please note that
            disabling certain cookies may affect the functionality of our
            website.
          </Typography>

          <Typography variant="h6" sx={styles.letterHeadingStyle}>
            C. Log Data
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We collect log data automatically when you access or use our
            platform. This data helps us monitor the performance, security, and
            availability of our services. It may include:
          </Typography>
          <Typography sx={styles.paragraphStyle}>Access times</Typography>
          <Typography sx={styles.paragraphStyle}>
            Pages viewed or interacted with
          </Typography>
          <Typography sx={styles.paragraphStyle}>IP address</Typography>
          <Typography sx={styles.paragraphStyle}>
            Error logs or system alerts
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            5.3. Third-Party Data Collection
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In some cases, Hexafort may receive personal data from third-party
            sources, including:
          </Typography>
          <Typography variant="h6" sx={styles.letterHeadingStyle}>
            A. Third-Party Integrations
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you use third-party services that integrate with Hexafort's
            platform (such as cloud service providers, HR platforms, or other
            enterprise tools), we may collect personal data related to your
            account with those third-party services. This data is collected
            based on your consent and the integration settings you choose.
          </Typography>

          <Typography variant="h6" sx={styles.letterHeadingStyle}>
            B. Service Providers
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We may work with third-party service providers who help us deliver
            our services to you, such as payment processors, customer support
            systems, and analytics tools. These third parties may collect
            personal data on our behalf to facilitate service delivery and
            communication.
          </Typography>

          <Typography variant="h6" sx={styles.letterHeadingStyle}>
            C. Social Media Platforms
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you interact with us on social media platforms or share
            information through social media channels (e.g., Twitter, LinkedIn,
            Facebook), we may collect personal data that you provide on those
            platforms in accordance with your privacy settings.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            5.4. Consent to Data Collection
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In all cases where personal data is collected, we aim to obtain your
            consent, particularly when the collection is not necessary for the
            performance of a contract or legal obligation. If consent is
            required, we will ensure that it is freely given, specific,
            informed, and unambiguous. You can withdraw your consent at any time
            by contacting us through the methods outlined in Section 3.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            5.5. Automated Decision-Making and Profiling
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we do not engage in any automated decision-making
            processes, including profiling, that significantly affect you.
            However, we may use automated tools and algorithms to analyze data
            to improve our services, detect anomalies, or identify security
            risks, but these processes will not result in decisions that affect
            your rights or freedoms in a significant way.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="purpose-data-collection">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            6. Purpose of Data Collection
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we prioritize transparency and accountability in how we
            handle your personal data. The collection of personal data is
            essential to enable us to deliver high-quality services, ensure the
            safety and security of our platform, and meet our legal obligations.
            Below are the primary purposes for which we collect personal data:
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            6.1. Service Delivery and Account Management
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Personal data is collected to enable us to deliver the services you
            have requested, create and manage your account, and ensure that we
            can provide a tailored experience. We use your data to:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Account Creation and Maintenance: To create and manage your account,
            provide you with the necessary login credentials, and facilitate
            your access to our platform.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Service Customization: To tailor our services based on your
            preferences, service inquiries, and engagement with Hexafort,
            ensuring we meet your specific needs.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Transaction Processing: To process any transactions or agreements
            related to the services you have requested from us, including
            invoicing and payments.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            6.2. Communication and Customer Support
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We collect personal data to maintain communication with you and to
            assist with customer support. This includes:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Customer Support and Assistance: To resolve any issues or queries
            you have related to our platform and services.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Communication: To keep you informed about service updates, new
            features, changes to terms or policies, and other essential updates
            regarding your account.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            6.3. Legal and Compliance Requirements
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            To comply with applicable laws, regulations, and standards, we
            collect personal data to:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Compliance with Laws and Regulations: To ensure we meet our legal
            obligations and regulatory requirements, including compliance with
            tax and financial regulations.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Fraud Prevention: To protect against fraud, misuse, or unauthorized
            access to the platform.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Legal Documentation: To maintain necessary records for legal or
            contractual purposes, such as contracts, audit trails, or compliance
            documentation.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            6.4. Service Improvement and Optimization
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We collect personal data to improve our services and enhance the
            user experience. This includes:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Platform Improvement: Analyzing data to identify areas where the
            platform can be improved, such as enhancing functionality, fixing
            bugs, or adding new features.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Security Enhancements: Monitoring and analyzing data to detect
            security threats, prevent unauthorized access, and improve the
            overall safety of our platform.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            6.5. Marketing and Business Development
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you have provided consent, we may collect personal data for
            marketing purposes to:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Promotional Activities: Send you promotional materials, offers, and
            updates regarding our products and services that we think may be of
            interest to you.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Market Research and Feedback: Conduct surveys or gather feedback to
            better understand your needs and preferences, which helps us enhance
            our offerings.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            6.6. Analytics and Reporting
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            To better understand how our platform is used and optimize the user
            experience, we collect personal data for:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Analytics: To analyze and track usage patterns, interactions with
            our platform, and performance metrics, helping us to identify and
            address any potential issues.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Reporting: To generate insights and performance reports that guide
            future product development and service enhancements.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            6.7. Consent-Based Purposes
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In certain instances, we may request your consent to collect and use
            your personal data for specific purposes that are not covered under
            the points above. This includes:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Marketing Communications: When you explicitly opt-in to receive
            newsletters or promotional updates from us.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Surveys and Feedback: For voluntary participation in surveys or
            market research where we seek your feedback for improving our
            services.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="legal-basis">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            7. Legal Basis for Processing
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we are committed to processing personal data lawfully,
            transparently, and fairly. In accordance with the General Data
            Protection Regulation (GDPR) and other applicable data protection
            laws, we rely on specific legal bases to collect and process your
            personal data. These legal bases ensure that the processing of
            personal data is done in a manner that respects your rights and
            interests.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            7.1. Contractual Necessity
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We process personal data based on the necessity of fulfilling our
            contractual obligations to you. When you engage with Hexafort to
            access our services, we need to collect and process your personal
            data to:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Provide and manage the services you requested.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Facilitate account creation, user access, and platform
            functionalities.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Process payments, provide invoices, and manage billing.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Offer customer support and respond to inquiries.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            This legal basis is relevant when we need your personal data to
            perform a contract between you and Hexafort, such as providing you
            with access to our platform and services.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            7.2. Consent
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In some cases, we rely on your explicit consent to collect and
            process personal data. If required, we will seek your permission
            before collecting or processing certain types of personal data.
            Examples include:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Sending marketing communications, newsletters, or promotional
            updates.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Participating in optional surveys, research, or feedback requests.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You may withdraw your consent at any time by contacting us directly
            or adjusting your communication preferences on our platform. The
            withdrawal of consent will not affect the lawfulness of processing
            based on consent before its withdrawal.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            7.3. Legitimate Interests
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In certain cases, we process personal data based on our legitimate
            business interests or the legitimate interests of third parties,
            provided that these interests do not override your fundamental
            rights and freedoms. For example, we may use your personal data to:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Improve the security of our platform by monitoring and detecting
            unauthorized access or potential threats.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Analyze user activity to enhance our services, features, and overall
            user experience.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Conduct internal administrative activities, including audits, data
            analysis, and service optimization.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            When we process personal data based on legitimate interests, we
            ensure that we have balanced these interests with your rights and
            freedoms to protect your privacy.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            7.4. Legal Obligations
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort may also process personal data to comply with our legal
            obligations. This includes:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Compliance with tax, financial, and audit requirements.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Responding to lawful requests by public authorities or law
            enforcement agencies.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Meeting regulatory, contractual, or legal reporting obligations.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We process data under this legal basis when we are required to do so
            to fulfill our legal obligations, such as data retention or
            compliance with specific regulations.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            7.5. Vital Interests
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In rare cases, we may process personal data based on the necessity
            to protect vital interests. This would be relevant in situations
            where processing personal data is necessary to protect someone's
            life or health.
          </Typography>

          <Typography variant="h3" sx={styles.subsubheadingStyle}>
            7.6. Storage Location
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort securely stores personal data in a specific location to
            ensure compliance with data protection laws and maintain the
            integrity and confidentiality of the data. The data is securely
            stored in data centers where appropriate security measures are in
            place to protect the data from unauthorized access, loss, or misuse.
            We ensure that the storage and processing of personal data comply
            with applicable data protection regulations in the relevant
            jurisdictions.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="how-data-used">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            8. How Data is Used
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we are committed to using your personal data
            responsibly and transparently. We use the personal data we collect
            for a variety of legitimate purposes to ensure the delivery,
            optimization, and security of our services. Below, we outline how
            your personal data is used across our platform and services:
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            8.1. Service Provision and Account Management
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We use the personal data you provide to create and manage your
            account, ensure you have access to the services you require, and
            maintain effective communication with you. This includes:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Account Creation and Access: To create and manage your account on
            Hexafort's platform, assign appropriate user roles, and facilitate
            secure access.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Service Delivery: To provide the cybersecurity services that you
            have requested, including risk assessments, vulnerability
            management, security audits, and other cybersecurity features
            offered by Hexafort Secure.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Platform Customization: To personalize and tailor the user
            experience based on your preferences and requirements.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            8.2. Communication and Support
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We use your data to maintain communication with you, respond to
            queries, and provide customer support services. This includes:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Customer Support: To resolve any technical issues, answer questions,
            and provide assistance related to our services or platform.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Service Updates and Notifications: To inform you about essential
            updates, changes to our terms or services, new feature releases, or
            maintenance schedules.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Notifications: To send notifications or alerts related to security
            issues, updates to your account, or other important information
            regarding your use of Hexafort services.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            8.3. Legal Compliance and Security
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We use personal data to ensure compliance with applicable laws and
            regulations, safeguard your data, and ensure the security of our
            platform. This includes:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Compliance with Legal Obligations: To fulfill any legal, regulatory,
            and tax requirements, including keeping records for audit or legal
            purposes.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Fraud Prevention and Detection: To identify and prevent fraudulent
            activities, unauthorized access, or security breaches.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Data Security: To monitor platform activity for potential security
            risks, protect against threats, and ensure the overall security and
            integrity of our services.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            8.4. Service Improvement and Analytics
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We continuously work to improve our platform and services. The data
            collected is used for:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Service Optimization: To assess the performance and functionality of
            our platform, identify areas for improvement, and enhance the user
            experience.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Product Development: To gather feedback and insights to guide future
            product enhancements, feature development, and upgrades.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            User Behavior Analysis: To analyze how users interact with the
            platform, allowing us to understand usage patterns and preferences
            in order to refine our offerings.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            8.5. Marketing and Business Development
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We may use personal data for marketing and business development
            purposes, where we have your consent, or where permitted under
            applicable law. This includes:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Promotional Communications: To send you promotional emails,
            newsletters, and updates regarding new features, services, or offers
            that may be of interest to you.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Market Research: To engage in surveys, collect feedback, and
            understand market trends, ensuring that our services remain relevant
            to your needs.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Business Partnerships: To identify and establish potential business
            partnerships or collaborations based on shared interests and mutual
            benefits.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            8.6. Data Retention and Deletion
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Your data is used for as long as it is necessary to fulfill the
            purposes outlined in this Privacy Policy. We retain your personal
            data to:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Fulfill Contractual Obligations: To provide ongoing services and
            comply with any contractual obligations we have with you.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Legal and Regulatory Compliance: To meet data retention requirements
            imposed by law or regulation.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Security and Backup: To securely store data for backup purposes and
            for ensuring continuity of service.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Once the purposes for which your data was collected have been
            fulfilled, and in accordance with our data retention policies, your
            personal data will be deleted or anonymized. If your account is
            terminated or if you request deletion, we will ensure your data is
            securely deleted from our system within 30 days.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            8.7. Third-Party Service Providers
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We may share your personal data with trusted third-party service
            providers who assist in the operation and delivery of our services.
            These third parties are contractually bound to protect your data and
            use it solely for the purposes outlined in our agreements. We may
            use third parties for:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Cloud Hosting and Data Storage: To securely store your data in a
            reliable cloud infrastructure.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Payment Processing: To facilitate secure billing and payment
            transactions.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Customer Support Tools: To provide better assistance through
            third-party customer service platforms.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            All third-party service providers are carefully vetted and are
            required to adhere to appropriate data protection and security
            standards.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="sharing-data">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            9. Sharing of Personal Data
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we respect the confidentiality of your personal data
            and take measures to ensure that it is shared only in specific,
            legitimate circumstances. We will not sell, lease, or trade your
            personal data to third parties. However, there are instances where
            we may share your personal data with certain third parties as
            outlined below:
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            9.1. Trusted Service Providers
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We may share personal data with trusted third-party service
            providers who help us operate, improve, and deliver our services.
            These third-party providers are obligated to keep your data
            confidential and secure, and they are only allowed to use your
            personal data to perform services for Hexafort. These service
            providers may include:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Cloud Hosting and Data Storage Providers: To securely store and
            manage data in cloud infrastructure.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Payment Processors: To process financial transactions and facilitate
            billing.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Customer Support Platforms: To provide assistance and handle support
            tickets or inquiries.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Data Analytics Providers: To analyze usage data, trends, and other
            metrics that help us improve our services.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Each service provider is bound by data protection agreements to
            ensure that your personal data is handled in accordance with our
            privacy policies and applicable laws.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            9.2. Compliance with Legal Obligations
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We may disclose personal data to comply with legal or regulatory
            obligations or to respond to lawful requests from government
            authorities or other public bodies. This includes, but is not
            limited to, sharing personal data in the following situations:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Law Enforcement: If required by law, we may disclose your personal
            data to law enforcement agencies, government authorities, or
            regulatory bodies for purposes such as investigation, enforcement of
            laws, or national security.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Legal Proceedings: If we are involved in a legal dispute, lawsuit,
            or court proceeding, we may be required to share your personal data
            to protect our legal rights, defend claims, or comply with a court
            order.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We will only disclose your personal data when we have a legal
            obligation to do so or when required to protect our interests or the
            interests of others.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            9.3. Business Transactions and Corporate Changes
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In the event of a merger, acquisition, or sale of part or all of our
            business assets, personal data may be transferred to the acquiring
            entity or third party as part of the transaction. If such a transfer
            occurs, we will notify you in advance of any changes to the
            processing of your personal data. This notification will provide you
            with the option to review the changes and ensure your data is
            handled according to your preferences.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            9.4. Aggregated or Anonymized Data
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We may share aggregated, anonymized, or de-identified data with
            third parties for the purposes of business analysis, research, or
            marketing. This data will not contain any personally identifiable
            information and will not be linked back to you or your individual
            account.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            9.5. International Data Transfers
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            As part of our services, we may transfer your personal data to
            locations outside the country in which it was originally collected.
            Hexafort is a global company, and data may be processed in different
            regions such as the United States, United Kingdom, India, or other
            jurisdictions where our infrastructure or service providers are
            located.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We take all necessary steps to ensure that any international
            transfer of personal data complies with applicable data protection
            laws, including the implementation of appropriate safeguards to
            protect your data during transfer. This may include ensuring that
            our data processors are certified under recognized frameworks such
            as the EU-U.S. Privacy Shield or utilizing standard contractual
            clauses approved by relevant authorities.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            9.6. Consent-Based Sharing
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In some cases, we may seek your explicit consent before sharing your
            personal data with third parties for specific purposes, such as
            marketing or promotional collaborations. You can withdraw this
            consent at any time by updating your preferences or contacting us
            directly.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="international-transfers">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            10. International Data Transfers
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we are committed to protecting the privacy and security
            of your personal data. Due to the global nature of our services,
            personal data collected from you may be transferred, stored, and
            processed in countries other than your country of residence,
            including jurisdictions outside the European Economic Area (EEA) or
            your home country. These transfers are an essential part of our
            ability to provide services to you across different regions.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            10.1. Data Transfers Across Borders
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            As a company operating in multiple jurisdictions, including the
            United States, the United Kingdom, and India, we may transfer your
            personal data to servers or data centers located outside of your
            country or the region in which you initially provided it. This
            includes transfers to countries with varying levels of data
            protection regulations.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            For example, data may be transferred to and stored in cloud
            infrastructure or on servers located in the United States, United
            Kingdom, India, or other locations where our service providers are
            based.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            10.2. Safeguards for International Transfers
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort ensures that any personal data transferred internationally
            is done so in compliance with applicable data protection laws,
            including the General Data Protection Regulation (GDPR) for
            residents of the European Union. We implement various safeguards to
            ensure the protection of your personal data when it is transferred
            across borders.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Some of the key measures we take include:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Standard Contractual Clauses (SCCs): We use the European
            Commission's standard contractual clauses to ensure that any
            personal data transferred from the European Economic Area (EEA) to
            third countries is subject to adequate protection, as required by
            the GDPR.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Data Processing Agreements: We have data processing agreements in
            place with third-party service providers to ensure that they comply
            with appropriate data protection obligations and handle your data
            securely and responsibly.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Privacy Shield Frameworks: Where applicable, we ensure that our
            service providers are certified under frameworks such as the EU-U.S.
            Privacy Shield or other recognized international data protection
            frameworks.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In addition to these legal measures, we implement high-level
            security controls to protect your personal data during international
            transfers. These controls include data encryption, secure data
            transmission protocols (e.g., SSL/TLS), and advanced access
            management systems. These security measures are designed to ensure
            that your data remains protected from unauthorized access,
            disclosure, alteration, or destruction, regardless of the location
            where it is stored or processed.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            10.3. Your Rights and Control Over International Transfers
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            While we take every precaution to ensure the security of your
            personal data, we understand that transferring your data across
            borders may raise concerns about privacy and protection. As a user,
            you have the right to inquire about the transfers of your personal
            data and how they are handled.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You can exercise the following rights with respect to international
            data transfers:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Right to Information: You have the right to request more information
            about the specific countries to which your personal data is being
            transferred and the safeguards in place.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Right to Withdraw Consent: If the international transfer of your
            personal data is based on your consent, you have the right to
            withdraw that consent at any time, which may impact your ability to
            use certain services.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you have any concerns regarding the international transfer of
            your personal data or would like to request further information,
            please feel free to contact us using the contact details provided in
            Section 3 (Contact Information).
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            10.4. Impact of International Transfers
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Please be aware that in certain jurisdictions, the legal protections
            for personal data may not be as comprehensive as those in your home
            country. For example, countries outside the EEA, United States, or
            the UK may not have laws that provide the same level of protection
            as those set forth under the GDPR. However, we are committed to
            ensuring that your personal data is handled in accordance with
            applicable data protection standards regardless of the jurisdiction
            in which it is processed.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We employ high-security controls to safeguard your data and mitigate
            any risks associated with international transfers. These controls
            include encryption, access restrictions, and regular security
            assessments. Our goal is to ensure that your data remains protected,
            no matter where it is transferred or stored.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We will always take steps to ensure that your rights and privacy are
            safeguarded during international data transfers. If you have any
            questions or concerns regarding this matter, we are available to
            discuss and address them.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="data-retention">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            11. Data Retention Policy
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we prioritize data privacy and security, and part of
            this commitment involves managing your personal data in a
            responsible manner. We retain personal data only for as long as it
            is necessary to fulfill the purposes outlined in this Privacy
            Policy, including for the purposes of providing our services,
            complying with legal obligations, resolving disputes, and enforcing
            our agreements.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            11.1. Retention Period
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            The personal data we collect will be retained for the period
            necessary to fulfill the purposes for which it was collected, as
            detailed in this Privacy Policy. The retention periods for your data
            vary based on the type of data, the services you use, and our legal
            obligations. Some of the key considerations for our retention
            periods are:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Account Information: We will retain personal data associated with
            your account (such as your name, email address, and service-related
            information) for as long as your account remains active or as needed
            to provide the services you have requested.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Contractual Data: Data related to contractual agreements, such as
            contracts and invoices, will be retained for the duration of the
            contract and, where applicable, for a period of time after the
            contract ends (typically for a period of 7 years), to comply with
            tax, accounting, and legal requirements.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Customer Support: Data related to customer support inquiries,
            including emails or chats, will be retained for as long as necessary
            to resolve your queries and improve our service. Typically, this
            information will be retained for 1 to 2 years after the resolution
            of the issue.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Billing and Payment Data: Information related to payment processing
            and billing is retained for the minimum time required to complete
            the payment process and for compliance with accounting standards.
            This data is generally retained for a period of 7 years, in line
            with financial regulations.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Marketing Data: If you have opted in to receive marketing
            communications from us, we will retain your contact information for
            as long as you continue to receive communications. You can withdraw
            your consent at any time, and we will stop sending marketing
            materials to you. If you unsubscribe or request to be removed from
            our marketing lists, we will retain your information to ensure you
            are not contacted in the future.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            11.2. Data Deletion
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Once the retention period for your personal data expires, or if you
            request deletion of your data, we will take appropriate steps to
            securely delete or anonymize your personal data. This includes
            ensuring that data is removed from active databases, backups, and
            any other forms of storage that are no longer necessary for the
            purposes for which it was collected.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Account Deletion: If you request the deletion of your account, we
            will deactivate it and permanently delete all personal data
            associated with your account within 30 days, subject to any
            applicable legal, regulatory, or contractual requirements that may
            necessitate retention for a longer period.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Post-Contract Data Deletion: In the event of contract termination,
            we will securely delete or anonymize all personal data associated
            with your account after 30 days, unless the data is required for
            compliance with applicable laws or business processes (e.g.,
            accounting or tax purposes).
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            11.3. Exceptions
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In some cases, we may retain personal data for a longer period than
            outlined above if required by law, legal process, or legitimate
            business purposes. Some of the reasons we may need to retain data
            include:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Legal Obligations: We may be required to retain personal data to
            comply with legal obligations such as tax, accounting, or regulatory
            reporting requirements.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Dispute Resolution: If there are ongoing disputes or legal
            proceedings, we may retain relevant data until the matter is
            resolved.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Business Interests: In some cases, we may retain certain personal
            data for business interests such as fraud prevention, the protection
            of our assets, or ongoing business operations, provided this is
            compliant with applicable data protection regulations.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            11.4. Data Retention and Security Measures
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Throughout the data retention period, we ensure that your personal
            data is securely stored and protected. We implement appropriate
            technical and organizational measures to prevent unauthorized
            access, disclosure, alteration, or destruction of your personal
            data. These measures are regularly reviewed and updated to ensure
            ongoing security.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            11.5. Your Rights Regarding Data Retention
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You have the right to request that we delete or correct personal
            data if you believe it is inaccurate or no longer necessary for the
            purposes for which it was collected. You can also request that we
            stop processing your data under certain circumstances, as described
            in the section regarding your rights.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you have any questions about our data retention practices or wish
            to exercise your rights regarding your personal data, please contact
            us using the contact details provided in Section 3 (Contact
            Information).
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="data-security">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            12. Data Security Measures
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, the security of your personal data is our top priority.
            We are committed to implementing robust data security measures to
            protect your information from unauthorized access, disclosure,
            alteration, or destruction. Our security practices are continuously
            updated to keep pace with emerging threats and to comply with
            industry standards and regulations, including the General Data
            Protection Regulation (GDPR).
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            12.1. Technical Security Measures
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We use a combination of advanced technical security measures to
            protect the personal data we collect and process. These include, but
            are not limited to:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Data Encryption: We encrypt personal data both in transit and at
            rest. All data transmitted between your device and our systems is
            protected using Secure Socket Layer (SSL) or Transport Layer
            Security (TLS) protocols. Data stored in our cloud-based
            infrastructure is also encrypted, ensuring that your data remains
            confidential and protected from unauthorized access.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Firewalls and Intrusion Detection Systems (IDS): Our cloud-based
            infrastructure is secured with firewalls and intrusion detection
            systems to monitor and protect our networks from unauthorized access
            and potential attacks. These systems help detect and block malicious
            traffic and unauthorized attempts to access our data.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Access Control: We implement strict access control policies to
            ensure that only authorized personnel have access to personal data.
            Access to sensitive data is granted based on the principle of least
            privilege, meaning that individuals are only given access to data
            necessary for their role.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Data Masking: In certain circumstances, we may use data masking
            techniques to protect sensitive data elements, such as personally
            identifiable information (PII), ensuring that sensitive data is
            concealed or obfuscated from unauthorized parties.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Multi-Factor Authentication (MFA): We use multi-factor
            authentication to strengthen the security of user accounts and
            sensitive systems. MFA adds an additional layer of security by
            requiring users to provide two or more forms of identification
            before accessing their accounts.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            12.2. Cloud-Based Infrastructure and Data Storage
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Our infrastructure and data storage are hosted on trusted, secure
            cloud platforms that adhere to the highest security standards. These
            cloud service providers offer industry-leading security controls to
            safeguard your data, including:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Data Redundancy and Backup: Our cloud service providers implement
            data redundancy and backup measures to ensure the integrity and
            availability of your personal data. In case of any unexpected
            incidents or system failures, your data remains safe and
            recoverable.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Global Security Certifications: The cloud platforms we use are
            compliant with major international security certifications, such as
            ISO 27001, SOC 2, and GDPR. This ensures that your data is hosted on
            platforms that meet the highest security and privacy standards.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Data Center Security: The data centers used by our cloud service
            providers are physically secured with 24/7 surveillance, access
            controls, and other physical safeguards to prevent unauthorized
            access to the infrastructure.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            12.3. Organizational Security Measures
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In addition to technical measures, we have implemented a variety of
            organizational controls to protect your personal data. These
            include:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Employee Training and Awareness: We ensure that all employees who
            handle personal data are trained in data privacy and security best
            practices. Regular training sessions are conducted to keep our staff
            aware of the latest security threats and the necessary precautions
            to mitigate them.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Data Minimization and Anonymization: We follow the principle of data
            minimization by collecting only the data necessary for the provision
            of services. We also anonymize or pseudonymize personal data when
            appropriate, reducing the risk of exposure in the event of a data
            breach.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Incident Response Plan: In the unlikely event of a security breach,
            we have a well-defined incident response plan in place to promptly
            address the situation. Our team is trained to respond quickly to any
            security incidents, and we will notify affected individuals and
            relevant authorities as required by applicable law.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            12.4. Regular Security Audits and Assessments
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We conduct regular security audits, vulnerability assessments, and
            penetration testing to identify and address any weaknesses in our
            systems and processes. These assessments are performed by both
            internal teams and external security experts to ensure the
            effectiveness of our security measures.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We continually review and update our security practices to ensure
            that they align with industry best practices and compliance
            requirements, such as ISO 27001, GDPR, and other applicable data
            protection laws.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            12.5. Data Retention and Deletion Security
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We take the security of your personal data seriously even after it
            is no longer required for the purposes for which it was collected.
            Once personal data is no longer necessary, we will securely delete
            or anonymize it in a manner that ensures it cannot be recovered or
            reconstructed.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            12.6. Third-Party Security Measures
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We ensure that third-party service providers who have access to your
            personal data comply with our stringent security standards. We
            conduct due diligence on all third-party vendors, including data
            processors, to ensure that they implement appropriate security
            measures to protect your data.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We also require that our third-party service providers sign data
            protection agreements that outline their obligations regarding the
            security of your personal data.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            12.7. Your Role in Data Security
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            While we take every measure to protect your data, we also encourage
            you to play a role in safeguarding your personal data. Please ensure
            that your login credentials are kept secure, and refrain from
            sharing your account details with unauthorized individuals. If you
            believe that your account has been compromised, please notify us
            immediately.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="cookies">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            13. Cookies and Tracking Technologies
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we prioritize your privacy and ensure that your
            experience on our platform is both secure and efficient. Our website
            and application do not use cookies for advertisement, targeted
            marketing, or tracking user behavior. However, we do use a single
            cookie for essential functionality related to user authentication.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            13.1. What are Cookies?
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Cookies are small text files stored on your device that allow
            websites and applications to remember information about your visit.
            They are commonly used to enhance user experience and ensure smooth
            functionality.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            13.2. Cookie Used for Application
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We use a single cookie for managing your authentication session.
            This cookie is used solely to store a refresh token, which helps in
            keeping your session active and ensuring seamless access to the
            platform without requiring you to log in repeatedly.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Refresh Token Cookie: The cookie is essential for the functioning of
            our application and is used to automatically refresh your
            authentication token, allowing you to remain logged in without
            needing to re-enter credentials each time. This cookie is used only
            for session management and is not used for any tracking or
            advertising purposes.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            13.3. How We Use Cookies
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            The refresh token cookie is used exclusively for maintaining your
            login session and enhancing your experience by preventing frequent
            logins. This cookie does not track personal activity, gather data
            for marketing, or monitor user behavior across other websites or
            applications.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            13.4. Managing Cookies
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You have control over the use of this cookie. If you prefer, you can
            disable cookies entirely through your browser settings. However,
            please note that if you disable this cookie, you will be logged out
            of the application, and you may need to re-enter your login
            credentials each time you access the platform.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            13.5. How to Disable Cookies
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you wish to disable cookies, including the refresh token cookie,
            you can do so through your browser's settings. Instructions for
            managing cookies in various browsers are available below:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Google Chrome: Google Chrome - Manage Cookies
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Mozilla Firefox: Mozilla Firefox - Manage Cookies
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Safari: Safari - Manage Cookies
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Please note that if you disable cookies, you will be logged out, and
            some features of our application may not function as expected.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            13.6. Changes to Cookie Policy
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We may update this Cookie Policy occasionally to reflect changes in
            the way we use cookies or to comply with legal requirements. Any
            updates will be posted here with the updated date. We encourage you
            to periodically review this section for the latest information
            regarding our cookie use.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="gdpr-rights">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            14. User Rights under GDPR
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            As part of our commitment to GDPR compliance and respecting your
            privacy, we want to ensure that you are fully informed about the
            rights you hold under the General Data Protection Regulation (GDPR)
            regarding your personal data. These rights allow you to have control
            over how your data is processed, stored, and used.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you are a resident of the European Economic Area (EEA), the
            following rights are available to you regarding the personal data we
            collect:
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            14.1. Right to Access
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You have the right to request confirmation as to whether or not your
            personal data is being processed, and if so, to access the data
            along with the following details:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            The purposes of processing.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            The categories of personal data being processed.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            The recipients or categories of recipients with whom the data has
            been or will be shared.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            The retention period of the data or criteria used to determine that
            period.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Your rights under GDPR, including the right to request corrections,
            deletions, or restrictions on the processing of your data.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            To exercise this right, you may contact us using the contact details
            provided in this privacy policy.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            14.2. Right to Rectification
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If the personal data we hold about you is inaccurate or incomplete,
            you have the right to request that we rectify or complete the data.
            This ensures that your personal information is kept accurate and up
            to date.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            14.3. Right to Erasure ("Right to be Forgotten")
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You have the right to request the erasure of your personal data
            under certain circumstances, including:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If the data is no longer necessary for the purposes for which it was
            collected.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you withdraw your consent, and there is no other legal basis for
            processing.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you object to the processing, and there are no overriding
            legitimate grounds for continued processing.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If the data has been unlawfully processed.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Please note that there may be legal or contractual obligations that
            prevent us from erasing certain data.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            14.4. Right to Restriction of Processing
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You have the right to request the restriction of the processing of
            your personal data under certain circumstances, including:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you contest the accuracy of the data, we will restrict processing
            until we verify its accuracy.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you object to the processing of your data, and we need to verify
            if our legitimate grounds override your interests.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If the processing is unlawful, but you oppose erasure and request
            restriction instead.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            While restricted, we will not process your personal data except for
            storage, legal obligations, or with your consent.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            14.5. Right to Data Portability
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You have the right to receive the personal data we hold about you in
            a structured, commonly used, and machine-readable format, and to
            transmit that data to another controller. This right applies only to
            data you have provided to us and where the processing is based on
            consent or contractual necessity.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            14.6. Right to Object
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You have the right to object to the processing of your personal data
            on grounds related to your particular situation. If we process your
            data for direct marketing purposes, you can object at any time and
            we will cease the processing for such purposes.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In case of processing based on legitimate interests, we will assess
            whether our legitimate grounds outweigh your rights and freedoms. If
            they do not, we will stop processing your data.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            14.7. Right to Withdraw Consent
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you have provided consent to the processing of your personal
            data, you have the right to withdraw that consent at any time.
            Withdrawal of consent does not affect the lawfulness of processing
            based on consent before its withdrawal.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            14.8. Right to Lodge a Complaint with a Supervisory Authority
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you believe that the processing of your personal data infringes
            upon your rights under GDPR, you have the right to lodge a complaint
            with a supervisory authority. This could be the Data Protection
            Authority in your country of residence.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            For the UK, the supervisory authority is the Information
            Commissioner's Office (ICO). For the EEA, you can contact your local
            Data Protection Authority (DPA).
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            14.9. How to Exercise Your Rights
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you wish to exercise any of the above rights, please contact us
            at the details provided in the Contact Information section of this
            Privacy Policy. We may request additional information to verify your
            identity and ensure that we provide the right to access or action
            the request you've made.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort is committed to processing your data with transparency and
            in compliance with GDPR. If you have any concerns or questions
            regarding how we handle your personal data, we encourage you to
            reach out to us directly.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="exercise-rights">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            15. How to Exercise Your Rights
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we respect your rights under GDPR and are committed to
            making the process of exercising these rights as simple and
            straightforward as possible. If you wish to exercise any of the
            rights listed in this Privacy Policy, such as accessing, correcting,
            or deleting your personal data, or if you have any concerns or
            questions regarding our data processing practices, please follow the
            steps outlined below.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            15.1. Contact Information
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            To begin the process of exercising your rights, please contact us
            using the following methods:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Email: Send your request to our designated privacy team at{' '}
            <Link
              href="mailto:Privacy@hexafort.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
              Privacy@hexafort.io
            </Link>
            .
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Please ensure that you clearly state which right you wish to
            exercise and provide the necessary details for us to process your
            request efficiently. The rights you may exercise include, but are
            not limited to:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Right of access to your personal data.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Right to rectification of inaccurate or incomplete data.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Right to erasure of personal data (right to be forgotten).
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Right to restrict the processing of your personal data.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Right to data portability.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Right to object to processing.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Right to withdraw consent (if applicable).
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            15.2. Verification of Identity
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            For your protection and to ensure that we are only providing
            personal data to the right individual, we may require additional
            information to verify your identity. This could include submitting a
            government-issued ID or other forms of identification to confirm
            that the request is coming from the data subject (you).
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We may ask for more details depending on the specific request, but
            we will always do so in a way that minimizes the data we request to
            ensure your privacy.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            15.3. Response Time
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We are committed to responding to your requests promptly. As per
            GDPR regulations, we aim to provide a response to your request
            within 30 days. In some cases, where the request is complex or we
            receive multiple requests, this period may be extended by an
            additional two months. If we anticipate such a delay, we will inform
            you within the initial 30-day period, providing an explanation for
            the delay.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            15.4. Request Handling Process
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Once we receive your request, we will review and process it in
            accordance with GDPR guidelines. Here's an overview of the steps we
            follow:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Acknowledgment: Upon receiving your request, we will acknowledge
            receipt within 3 business days.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Assessment: Our team will assess the request to determine the most
            appropriate course of action, ensuring that we comply with your
            rights under GDPR.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Execution: We will proceed with fulfilling the request as
            appropriate, whether it involves providing access to your data,
            making corrections, or taking steps to delete or restrict the
            processing of your data.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Confirmation: Once your request has been processed, we will confirm
            the action taken in response, providing you with all relevant
            details, such as updated records or confirmation of deletion.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            15.5. Fees for Exercising Rights
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Exercising your rights under GDPR is generally free of charge.
            However, in certain circumstances, if your requests are manifestly
            unfounded or excessive (e.g., repetitive requests), we may charge a
            reasonable fee based on administrative costs or refuse to act on the
            request. In such cases, we will inform you beforehand about the fees
            or reasons for refusal.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            15.6. Restrictions on Your Rights
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            While we are committed to honoring your rights, there are certain
            legal and regulatory exceptions. In certain cases, we may be unable
            to fully comply with your request if:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            It conflicts with legal obligations we are required to meet.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            The request could infringe upon the rights and freedoms of others
            (e.g., disclosing data about other individuals).
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            The data is processed for legal claims or contractual reasons.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If we are unable to fulfill your request due to such limitations, we
            will provide you with an explanation.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            15.7. Supervisory Authority
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you believe we have not adequately addressed your request or if
            you have concerns regarding how we handle your personal data, you
            have the right to lodge a complaint with your local Data Protection
            Authority (DPA). For individuals in the European Economic Area
            (EEA), you may file a complaint with the relevant DPA in your
            country of residence.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            For the UK, this is the Information Commissioner's Office (ICO), and
            for other EU countries, please consult your local DPA.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="consent">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            16. Consent and Withdrawal of Consent
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we are committed to maintaining transparency and
            ensuring that our users' personal data is handled with care and in
            compliance with data protection regulations such as the GDPR. One of
            the core principles of the GDPR is that personal data should only be
            collected and processed with the explicit consent of the individual
            concerned, except in cases where another legal basis exists.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            16.1. Consent for Data Collection and Processing
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            When you use our services, interact with our platform, or otherwise
            provide your personal information, we may ask for your consent to
            collect and process your personal data. This consent is required for
            various activities, including, but not limited to:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Signing up for our services.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Subscribing to our newsletter or updates.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Participating in surveys, feedback forms, or marketing campaigns.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Providing personal information for specific features or services
            (such as support or inquiry submissions).
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Consent will be obtained through a clear and unambiguous affirmative
            action, such as ticking a box, submitting a form, or using the
            platform in a way that demonstrates agreement to our privacy
            practices.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            16.2. Types of Consent
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Explicit Consent: For certain activities, we may require your
            explicit consent, such as for processing sensitive data or for
            receiving marketing communications.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Implied Consent: For other less sensitive activities, such as
            creating an account, your consent may be implied by your active
            participation in the service (e.g., providing your name and contact
            details).
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We will always ensure that the purpose for which your data is being
            collected and processed is clearly stated at the time of obtaining
            your consent. This allows you to make an informed decision regarding
            your personal data.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            16.3. Withdrawal of Consent
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You have the right to withdraw your consent at any time, and you can
            do so without affecting the lawfulness of the processing that
            occurred prior to the withdrawal. If you decide to withdraw your
            consent, you will be able to continue using the services that do not
            require consent, and we will stop processing your data for the
            purposes for which consent was originally obtained.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            To withdraw your consent, you may follow these steps:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            For email or newsletter subscriptions: You can unsubscribe by
            clicking on the "unsubscribe" link included in every marketing
            communication we send you.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            For general consent: You can contact us directly through our privacy
            team at{' '}
            <Link
              href="mailto:Privacy@hexafort.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
              Privacy@hexafort.io
            </Link>{' '}
            or use our platform's settings to manage your preferences.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            For account-related data: You can modify or delete your account by
            logging into your account and adjusting your preferences, or you may
            contact our support team for assistance.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Once your consent is withdrawn, we will stop processing your
            personal data for the specific purposes for which consent was
            originally granted. However, please note that certain legal
            obligations may require us to retain some of your data even after
            withdrawal of consent.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            16.4. Consequences of Withdrawing Consent
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            While withdrawing consent will not affect the lawfulness of
            processing based on consent before withdrawal, there may be
            instances where the withdrawal of consent impacts the functionality
            of certain features or services. For example, if you withdraw
            consent to receive marketing materials, you may miss out on
            promotional offers or updates.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Additionally, withdrawing consent may result in limited access to
            certain services or features that rely on your consent for
            processing. However, you will still be able to use other features or
            services that are not dependent on consent.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            16.5. Consent for Children
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort's services are not intended for use by individuals under
            the age of 16. We do not knowingly collect personal data from
            individuals under 16. If we learn that we have inadvertently
            collected personal data from a child under the age of 16, we will
            take immediate steps to delete that data. If you are a parent or
            guardian and believe we have collected data from a child under 16,
            please contact us immediately to ensure the data is removed.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            16.6. Changes to Consent
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If there are any changes in the way we collect, process, or use your
            data, we may ask for your consent again. This ensures that we
            maintain transparency and that your personal data is always
            processed in a manner that aligns with your expectations.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="children">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            17. Children's Privacy
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we take privacy and data security seriously, and we are
            committed to protecting the personal information of all users. As
            part of this commitment, we adhere to strict privacy practices
            regarding children's data.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            17.1. No Collection of Children's Data
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort's services are not intended for use by individuals under
            the age of 16. We do not knowingly collect or process personal data
            from children or minors. Our services and platforms are designed for
            use by businesses and individuals who are of legal age to enter into
            contracts and provide consent for the collection and use of personal
            data.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            17.2. Children Are Not Our Customers
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We do not market our services to children, and we do not target
            children as customers. As such, we do not intentionally collect any
            personal data from individuals under the age of 16, nor do we have
            any features or services aimed at minors.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            17.3. Steps We Take to Protect Children's Privacy
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If we discover that we have inadvertently collected personal data
            from a child under the age of 16, we will take immediate action to
            delete the data. We encourage parents and guardians to monitor and
            supervise their children's online activities and to ensure that no
            personal data is shared with us without their consent.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            17.4. Contact Us
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you believe that we may have inadvertently collected personal
            information from a child under the age of 16, please contact us
            immediately at{' '}
            <Link
              href="mailto:Privacy@hexafort.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
              Privacy@hexafort.io
            </Link>
            . We will take prompt action to investigate and remove such data as
            necessary.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="third-party">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            18. Third-Party Websites/Links
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we may provide links or references to third-party
            websites, services, or resources in order to offer you additional
            information, tools, or services that may be useful to you. These
            links are provided for convenience and informational purposes only.
            However, it's important to note that once you click on any
            third-party links, you are leaving our platform, and your
            interactions with those websites or services will be governed by
            their own privacy policies and terms of use.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            18.1. No Control Over Third-Party Websites
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We do not control or endorse the content, privacy practices, or
            policies of third-party websites. These third-party websites may
            have their own privacy policies that are different from ours. We
            strongly encourage you to review the privacy policies of any
            third-party websites or services before providing them with any
            personal data. Hexafort is not responsible for the privacy practices
            or the content of third-party websites, including those linked to
            from our platform.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            18.2. Risks of Third-Party Websites
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            By clicking on third-party links, you acknowledge and agree that
            Hexafort is not responsible for any damages or losses incurred as a
            result of using these external websites or services. We recommend
            exercising caution and taking appropriate measures to protect your
            personal information when interacting with third-party sites. This
            includes ensuring that you are aware of their data collection
            practices and reviewing any relevant privacy terms or disclosures.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            18.3. Integration with Third-Party Services
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In some instances, our platform may integrate with third-party
            services or tools (such as cloud providers or payment processors) to
            enhance your user experience. When you interact with these
            third-party services, their respective privacy policies will apply
            to the data you share with them. We encourage you to review these
            policies and understand how your data is being handled when you
            engage with these third-party services.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            18.4. Security and Privacy of Third-Party Websites
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Although we strive to ensure that our platform and services are
            secure, we cannot guarantee the security or privacy practices of
            third-party websites. Therefore, you should be mindful of the fact
            that data shared with third-party websites may not be subject to the
            same level of protection as data shared directly with us.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            18.5. Responsibility for Third-Party Content
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Any information, content, or material obtained from third-party
            websites is done at your own discretion and risk. Hexafort is not
            liable for any damages or loss caused by relying on third-party
            content or services. We recommend that you verify the reliability
            and security of third-party services before sharing any personal
            information.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            18.6. Modifications to Links or Third-Party Services
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We may occasionally update, add, or remove links to third-party
            websites based on changes in the services we offer. While we will
            make reasonable efforts to ensure that any third-party websites or
            services we link to are reputable and trustworthy, we do not assume
            responsibility for the continued operation or security of these
            external sites.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="policy-updates">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            19. Policy Updates and Notification
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we are committed to keeping our users informed about
            how we handle their personal data. As part of our ongoing efforts to
            ensure transparency and compliance with data protection laws, we may
            update or modify this Privacy Policy from time to time. These
            updates may be necessary to reflect changes in the way we collect,
            use, or store personal data, or to comply with legal or regulatory
            requirements.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            19.1. How We Will Notify You of Updates
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            When we make significant changes to this Privacy Policy, we will
            notify you by posting the updated version on this page and
            indicating the effective date of the changes. We may also provide
            additional notifications, where appropriate, such as by email or
            through notices within our platform.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            19.2. Reviewing the Privacy Policy
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We encourage you to review this Privacy Policy regularly to stay
            informed about how we are protecting your personal data. By
            continuing to use our services after any modifications to the policy
            are made, you acknowledge and accept the updated terms.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            19.3. Effective Date of Policy
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            The most recent update to this Privacy Policy was made on April 6,
            2025. Any changes made after this date will be reflected in the
            version available on our website, and the effective date will be
            updated accordingly.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            19.4. User Responsibility to Stay Informed
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            It is your responsibility to periodically review this Privacy Policy
            for any changes. Continued use of our services after the posting of
            updated policies constitutes your acceptance of those changes. If
            you do not agree with the updated terms, you may choose to
            discontinue using our services or reach out to us for clarification
            regarding the changes.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="complaints">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            20. Complaints and Supervisory Authority
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            At Hexafort, we are committed to ensuring that your personal data is
            handled in accordance with applicable data protection laws,
            including the General Data Protection Regulation (GDPR). If you have
            any concerns or complaints about how we process your personal data,
            we encourage you to contact us directly so we can address your
            concerns promptly and efficiently.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            20.1. How to File a Complaint
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you believe that we have not handled your personal data
            appropriately or have violated your data protection rights, you have
            the right to lodge a complaint with us. You can reach out to our
            Data Protection Officer (DPO) or designated team at:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Email:{' '}
            <Link
              href="mailto:Privacy@hexafort.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
              Privacy@hexafort.io
            </Link>
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We will make every effort to address your concerns and resolve the
            issue in a timely and satisfactory manner.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            20.2. Your Right to Complain to a Supervisory Authority
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you are dissatisfied with our response or the way we handle your
            complaint, you have the right to lodge a formal complaint with a
            relevant Supervisory Authority. Under the GDPR, you can file a
            complaint with the data protection authority in your country or
            region.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            As Hexafort operates globally, we respect the authority of various
            data protection regulators, and you can reach out to the appropriate
            supervisory body based on your location.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Contact Details of Supervisory Authorities:
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            European Union (EU): If you are based in the EU, you can file a
            complaint with the Data Protection Authority in your country of
            residence or the national supervisory authority.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            United Kingdom (UK): If you are based in the UK, you may contact the
            Information Commissioner's Office (ICO).
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            India: If you are based in India, you may contact the Ministry of
            Electronics and Information Technology (MeitY) or the National Cyber
            Security Coordinator (NCSC).
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We recommend contacting us first to attempt to resolve any issues,
            but you are always free to approach the relevant supervisory
            authority at any time.
          </Typography>

          <Typography variant="h3" sx={styles.subheadingStyle}>
            20.3. Cooperation with Authorities
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We cooperate fully with data protection authorities and regulatory
            bodies and will assist them with any investigations regarding the
            processing of personal data, where required by law.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="dpas">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            21. Data Processing Agreements (DPAs)
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Hexafort is committed to complying with applicable data protection
            laws, including the GDPR, by establishing legally binding Data
            Processing Agreements (DPAs) with all vendors and service providers
            who process personal data on our behalf.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            These agreements define each party's responsibilities regarding data
            handling, security, breach notification, confidentiality, and
            compliance. Our DPAs are structured in accordance with Article 28 of
            the GDPR, and they ensure that any processing of personal data is
            done in a lawful, transparent, and secure manner.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Clients and partners may request a copy of our standard DPA by
            contacting our privacy team at{' '}
            <Link
              href="mailto:privacy@hexafort.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
              Privacy@hexafort.io
            </Link>
            .
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;
