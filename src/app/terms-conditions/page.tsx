'use client';

import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import termsAndConditionsStyles from './styles/termsAndConditionsStyles';

const TermsAndConditionsPage = () => {
  const theme = useTheme();
  const styles = termsAndConditionsStyles(theme);

  return (
    <Box sx={styles.containerStyle}>
      <Container maxWidth="lg">
        <Box sx={styles.headerBoxStyle as any}>
          <Typography
            variant="h1"
            sx={{ ...styles.headingStyle, ...styles.headerTitleStyle }}
          >
            Terms and Conditions
          </Typography>
          <Typography sx={styles.headerDateStyle}>
            Last Updated: 24/05/2025
          </Typography>
          <Typography sx={styles.headerDescriptionStyle}>
            Welcome to ComplianceHub Secure Private Limited ("ComplianceHub", "we", "our",
            or "us"). We operate globally with offices in the USA, UK, and
            India. These Terms and Conditions ("Terms") govern your access to
            and use of our cybersecurity SaaS platform and related services (the
            "Service"). By accessing or using our Service, you agree to be bound
            by these Terms.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="introduction">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            1. Introduction
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            ComplianceHub Secure Private Limited ("ComplianceHub") is a global provider of
            enterprise-grade cybersecurity solutions delivered via our SaaS
            platform. With offices located in the United States, United Kingdom,
            and India, we serve businesses worldwide with scalable, cloud-based
            tools designed to safeguard critical digital assets, ensure
            compliance, and manage risk effectively.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            These Terms and Conditions ("Terms") govern your access to and use
            of ComplianceHub’s cybersecurity services, including any associated
            applications, tools, or integrations (collectively, the "Service").
            These Terms apply to all individuals and entities who access or use
            our Service, including registered users, enterprise clients,
            partners, and their authorized personnel.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            By accessing or using our Service, you acknowledge that you have
            read, understood, and agreed to be bound by these Terms, as well as
            our Privacy Policy and any additional terms referenced herein.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="definitions">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            2. Definitions
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            "Service" refers to the suite of cloud-based cybersecurity products,
            tools, dashboards, APIs, integrations, reports, and support
            offerings made available by ComplianceHub via its SaaS platform. This
            includes any updates, enhancements, and new modules made available
            from time to time.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            "User" means any individual, organization, employee, contractor, or
            representative who accesses or uses the Service, whether on behalf
            of themselves or a business entity.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            "Account" means a registered user profile created to access and
            manage the Service, including configurations, subscriptions, and
            authorized personnel under a client organization.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            "Customer" refers to any individual or legal entity that has entered
            into a subscription or commercial agreement with ComplianceHub to use the
            Service.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            "Authorized User" refers to any employee, agent, or contractor of
            the Customer who is permitted to access and use the Service under
            the Customer’s account.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            "ComplianceHub", "we", "us", or "our" means ComplianceHub Secure Private
            Limited, a company headquartered in India with registered offices
            also located in the United States and the United Kingdom.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="eligibility">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            3. Eligibility
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            To use our Service, you must have the legal capacity to enter into
            binding agreements under the laws applicable in your jurisdiction.
            By accessing or using the Service, you confirm that you are doing so
            voluntarily and with the necessary authority, particularly if you
            are representing a company, startup, or other organization.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you are accessing the Service on behalf of an entity, you
            represent and warrant that you are authorized to bind that entity to
            these Terms.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            ComplianceHub welcomes users of all backgrounds, identities, and
            experience levels, and does not restrict access based on age,
            gender, or demographic profile — provided that use complies with
            applicable local laws and these Terms.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="account-registration">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            4. Account Registration & Security
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            To access and use the Service, users may be required to register and
            create an account, during which you agree to provide accurate,
            current, and complete information and to keep such information
            updated at all times. ComplianceHub reserves the right to suspend or
            terminate your account if any information provided is found to be
            false, misleading, or incomplete.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You are solely responsible for maintaining the confidentiality of
            your account credentials—including but not limited to your username,
            password, API keys, access tokens, and any authentication factors
            such as multi-factor authentication (MFA) or one-time passwords
            (OTP)—and you agree not to share these credentials with unauthorized
            individuals or allow others to access your account.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            All activities conducted under your account will be considered
            authorized by you, and you must immediately notify ComplianceHub at{' '}
            <Link
              href="mailto:support@compliancehub.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
              support@compliancehub.io
            </Link>{' '}
            if you become aware of any actual or suspected unauthorized use or
            any other security breach.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            While ComplianceHub employs robust access controls and encryption
            mechanisms to protect user accounts, the ultimate responsibility for
            safeguarding your credentials and maintaining proper access controls
            within your organization lies with you.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We strongly recommend enabling MFA, regularly updating passwords,
            and routinely reviewing user access permissions to enhance your
            account’s security. Additionally, ComplianceHub may impose limits or
            restrictions on your account without prior notice if security
            violations are suspected or confirmed, in order to protect the
            integrity of the platform and other users. ComplianceHub will not be
            liable for any loss or damage resulting from your failure to fulfill
            these responsibilities.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="subscription">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            5. Subscription Plans & Billing
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            ComplianceHub offers a range of subscription-based plans tailored to meet
            the diverse needs of organizations of all sizes, with varying levels
            of access, features, data usage, support options, and user limits,
            all clearly outlined on our website or detailed in your service
            proposal or agreement. Subscriptions are billed in advance on a
            monthly or annual basis, starting from the activation date and
            automatically renewing unless cancelled at least seven days before
            the renewal date.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You agree to pay all fees and charges as per the pricing and payment
            terms provided at purchase, using valid payment methods accepted by
            ComplianceHub. Failure to make timely payments or declined transactions
            may result in suspension or termination of your access to the
            Service. All fees are exclusive of taxes, levies, or duties imposed
            by tax authorities, and you are responsible for any such taxes
            associated with your usage.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We notify you at least ten days before each renewal, including any
            changes to fees or terms, and if pricing adjustments occur, you will
            receive at least 30 days’ advance notice, with new rates applying
            from the next renewal; your continued use constitutes acceptance of
            the updated pricing.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Subscription fees are non-refundable except where explicitly agreed
            in writing or required by law, and no refunds will be provided for
            unused time, downgrades, or early termination.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            For enterprise customers operating under a signed agreement, payment
            terms, custom pricing, and renewals are governed by the respective
            Master Services Agreement (MSA) or Statement of Work (SOW), with
            invoices issued under agreed terms such as Net 15 or Net 30, and
            failure to comply may lead to service disruptions or legal actions.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="free-trials">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            6. Free Trials and Promotions
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            ComplianceHub may, at its sole discretion, offer free trials, beta
            access, or other promotional offers that provide limited, no-cost
            access to the Service for a specified evaluation period, allowing
            prospective customers to explore features before committing to a
            paid subscription. Eligibility for such trials or promotions is
            determined exclusively by ComplianceHub, which reserves the right to
            refuse, revoke, or limit access at any time for any reason,
            including suspected misuse or abuse.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Trial users typically receive access to a limited or full version of
            the Service for a defined duration communicated during registration,
            after which access will be suspended unless the user upgrades to a
            paid plan. Certain trials may not require payment information;
            however, if provided, users authorize ComplianceHub to automatically
            charge the applicable fees at trial expiration unless cancelled
            beforehand.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            All trial and promotional users agree to comply with the same Terms
            of Service, Acceptable Use Policies, and data handling standards as
            paid users, and may not use the trial for benchmarking, reverse
            engineering, unlawful activities, or competitive purposes. Data
            entered or generated during the trial may be deleted after trial
            expiration unless the user converts to a paid subscription within a
            reasonable timeframe (such as 14 days), with no guarantee of data
            recovery afterward.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Promotional offers, including discounts or extended access, are
            non-transferable, cannot be redeemed for cash, are valid only for
            the terms specified, and may not be combined with other offers
            unless explicitly authorized. ComplianceHub reserves the right to modify,
            suspend, or terminate any trial or promotional offer, including
            changes to eligibility, duration, or scope, without prior notice.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="user-responsibilities">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            7. User Responsibilities
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            As a user of our Service, you agree to use it responsibly and not to
            misuse or attempt to gain unauthorized access to any part of the
            Service, its systems, or networks. You must comply with all
            applicable local, national, and international laws and regulations,
            including those related to data protection, intellectual property,
            privacy, and electronic communications.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You are solely responsible for ensuring that any content you upload,
            submit, or share through the Service is free from viruses, malware,
            or any harmful code, and does not infringe upon the rights of any
            third parties or promote illegal or harmful activities.
            Additionally, you are responsible for maintaining the
            confidentiality of your account credentials and for all actions
            taken under your account. Any violation of these responsibilities
            may result in suspension or termination of your access to the
            Service and could lead to legal consequences.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="intellectual-property">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            8. Intellectual Property Rights
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            All content, including but not limited to text, graphics, logos,
            trademarks, software, technology, and any other materials available
            on or through the Service, are the exclusive property of ComplianceHub or
            our licensors and are protected by applicable intellectual property
            laws.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            By using the Service, you are granted a limited, non-exclusive,
            non-transferable, and revocable license solely to access and use the
            Service in accordance with the terms of your subscription and these
            Terms and Conditions. This license does not permit you to copy,
            modify, distribute, sell, lease, or create derivative works based on
            any part of the Service or its content unless expressly authorized
            in writing by ComplianceHub. Any unauthorized use of our intellectual
            property may result in legal action and termination of your access
            to the Service. All rights not expressly granted to you are reserved
            by ComplianceHub and our licensors.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="privacy-and-security">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            9. Data Privacy & Security
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            ComplianceHub is committed to protecting your data and ensuring your
            privacy by adhering to the highest standards of data security and
            compliance, including ISO 27001 certification and full compliance
            with the General Data Protection Regulation (GDPR). We process your
            personal and sensitive data strictly in accordance with our Privacy
            Policy, which outlines the types of data collected, the purposes for
            processing, and your rights regarding your information.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            To safeguard your data from unauthorized access, disclosure,
            alteration, or destruction, we implement robust technical and
            organizational measures, such as encryption, access controls,
            regular security assessments, and employee training. These measures
            are continually reviewed and updated to address evolving security
            threats and ensure the confidentiality, integrity, and availability
            of your data throughout its lifecycle.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="availability">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            10. Service Availability & Uptime
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            ComplianceHub is committed to ensuring the continuous availability of the
            Service on a full-time basis and strives to maintain a target uptime
            of 99.9%. However, despite our best efforts, unforeseen events
            beyond our control—such as technical failures, security incidents,
            natural disasters, or interruptions caused by third-party
            providers—may occasionally impact service availability.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In such cases, ComplianceHub cannot be held responsible for any resulting
            downtime or disruption. We prioritize transparent communication and
            will notify your designated account manager promptly about any
            planned maintenance or unexpected service interruptions, using the
            most appropriate communication channels based on the nature and
            duration of the downtime. Our goal is to minimize any inconvenience
            and restore full service as quickly as possible.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="termination">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            11. Termination & Suspension
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            ComplianceHub reserves the right to suspend or terminate your access to
            the Service at any time, without prior notice, in the event of any
            violation of these Terms and Conditions, failure to comply with
            applicable laws or legal requirements, or if there are outstanding
            unpaid fees or dues related to your account. Such suspension or
            termination may be immediate and without liability on our part.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Conversely, you may terminate your use of the Service at any time by
            providing us with appropriate notice as specified in your
            subscription agreement or contract. However, termination by you is
            subject to fulfillment of any existing contractual obligations or
            minimum service periods agreed upon at the commencement of your
            subscription. Upon termination or suspension, your right to access
            and use the Service will cease, and any data associated with your
            account may be deleted in accordance with our data retention
            policies.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="refund">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            12. Refund & Cancellation Policy
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            ComplianceHub operates on a pay-as-you-use model, and as such, we do not
            offer refunds for any fees or charges already incurred, unless
            explicitly agreed upon in writing under exceptional circumstances.
            All payments made for the use of the Service are non-refundable,
            including partial usage, unused credits, or early cancellation.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Users may cancel their subscription or usage-based service at any
            time, with such cancellations taking effect at the end of the
            current billing cycle. Continued use of the Service following
            cancellation will result in further charges. It is the user's
            responsibility to manage their usage and cancel in advance if they
            no longer wish to incur charges.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="liability">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            13. Limitation of Liability
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            To the maximum extent permitted by applicable law, ComplianceHub shall
            not be held liable for any indirect, incidental, special, punitive,
            or consequential damages arising out of or related to your use of,
            or inability to use, the Service. This includes, but is not limited
            to, damages for loss of profits, business interruption, loss of
            data, reputational harm, or any other commercial or economic loss,
            even if we have been advised of the possibility of such damages.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You acknowledge and agree that the Service is provided on an “as-is”
            and “as-available” basis, and while we strive for high reliability
            and performance, no system is completely error-free. In any event,
            ComplianceHub’s total cumulative liability for any claims arising under
            or related to these Terms—whether in contract, tort, or
            otherwise—shall be strictly limited to the total amount of fees you
            have paid to us for the Service during the twelve (12) months
            immediately preceding the event giving rise to the claim.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            This limitation forms an essential basis of the agreement between
            you and ComplianceHub, and without it, we would not be able to offer the
            Service at the current terms and pricing.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="disclaimer">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            14. Disclaimer of Warranties
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            The Service is provided by ComplianceHub on an “as is” and “as available”
            basis without any warranties of any kind, whether express, implied,
            statutory, or otherwise. While we aim to deliver a reliable, secure,
            and high-performing experience, we do not guarantee that the Service
            will be uninterrupted, error-free, fully secure, or free from bugs
            or other issues.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            To the fullest extent permitted by applicable law, we expressly
            disclaim all warranties, including but not limited to implied
            warranties of merchantability, fitness for a particular purpose,
            title, and non-infringement. ComplianceHub makes no representation or
            warranty that the Service will meet your specific needs or
            expectations, or that any defects will be corrected. You use the
            Service entirely at your own risk, and you are solely responsible
            for ensuring that the Service meets your requirements before relying
            on it for any purpose.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="indemnification">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            15. Indemnification
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You agree to take responsibility for your use of the Service and to
            protect, defend, and hold harmless ComplianceHub, its affiliates,
            officers, and employees from any claims, losses, damages,
            liabilities, costs, or expenses (including reasonable legal fees)
            that arise as a result of your misuse of the Service, your violation
            of these Terms, or any breach of applicable laws or third-party
            rights. This helps ensure that if your actions cause a legal issue
            for ComplianceHub, you will assist in resolving it and cover any
            resulting costs. We’re committed to providing a secure and reliable
            platform, and we trust you’ll use the Service responsibly and within
            the agreed terms.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="modifications">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            16. Modifications to Terms
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            ComplianceHub may update or modify these Terms and Conditions from time
            to time to reflect changes in our services, legal requirements, or
            business practices. Any such updates will take effect once published
            on our website or otherwise communicated to you. By continuing to
            use the Service after these changes are made, you agree to be bound
            by the revised Terms.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            For any material changes that may significantly affect your rights
            or obligations, we will make reasonable efforts to notify you in
            advance through appropriate communication channels, such as email or
            your account manager. We encourage you to review the Terms regularly
            to stay informed about how we are operating and protecting both your
            interests and ours.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="governing-law">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            17. Governing Law & Jurisdiction
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            These Terms and Conditions shall be governed by and interpreted in
            accordance with the laws of India, without regard to its conflict of
            law principles. In the event of any dispute, claim, or disagreement
            arising out of or in connection with the use of the Service or these
            Terms, the parties agree that such matters shall be subject to the
            exclusive jurisdiction of the competent courts located in Kerala,
            India. By using the Service, you consent to this legal framework and
            jurisdiction as the agreed venue for resolving any legal issues,
            ensuring clarity and consistency in the event of a dispute.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="contact">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            18. Contact Information
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            If you have any questions, concerns, or inquiries regarding these
            Terms and Conditions or the use of our Service, you are welcome to
            contact us. Our team is available to assist you and provide further
            clarification as needed. You can reach us via email at {}
            <Link
              href="mailto:legal@compliancehub.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
            Support@compliancehub.io
            </Link>{' '}
            or by phone at +91 99008 32864 during our standard business hours. We
            are committed to providing timely and transparent support to all our
            users.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="beta-features">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            19. Beta Features or Early Access Terms
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            From time to time, ComplianceHub may offer access to beta features,
            experimental tools, or early-stage versions of upcoming
            functionalities ("Beta Features"). These Beta Features are provided
            on an “as-is” and “as-available” basis, without any warranties of
            performance, reliability, or fitness for a particular purpose. They
            are made available for testing and feedback purposes only and may
            contain bugs, be incomplete, or undergo significant changes prior to
            official release—or may be discontinued entirely without prior
            notice.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            By choosing to use Beta Features, you acknowledge and accept the
            inherent risks and agree to use them at your own discretion.
            ComplianceHub shall not be liable for any issues, data loss, or
            disruptions resulting from the use of such Beta Features. Your
            feedback on these features is appreciated and helps us improve the
            final product.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="third-party-services">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            20. Third-Party Services
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Our platform supports integrations with various third-party tools
            and services that you may select to enhance or facilitate your
            operations. While ComplianceHub facilitates these integrations to provide
            a seamless experience, the choice, configuration, and use of any
            third-party service are made solely by you. ComplianceHub does not
            control, endorse, or guarantee the performance, security, or
            reliability of these third-party services and shall not be liable
            for any issues, interruptions, data loss, or damages resulting from
            their use.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Your interactions with these third-party tools are subject to their
            own terms of service and privacy policies, and we recommend
            reviewing those terms carefully. ComplianceHub’s responsibility is
            limited to providing the integration capability; the management and
            compliance of third-party services remain your responsibility.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="force-majeure">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            21. Force Majeure
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            ComplianceHub shall not be held responsible or liable for any failure or
            delay in performing its obligations under these Terms if such
            failure or delay is caused by events beyond our reasonable control.
            These events include, but are not limited to, natural disasters
            (such as floods, earthquakes, or storms), acts of war or terrorism,
            governmental actions or restrictions, internet or telecommunications
            outages, strikes, pandemics, or other unforeseen circumstances that
            prevent or hinder the provision of the Service.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            In the event of a force majeure situation, ComplianceHub will make
            reasonable efforts to notify you promptly and to resume normal
            service as soon as possible, but we cannot guarantee uninterrupted
            access or performance during such events. Your understanding and
            cooperation in these exceptional situations are appreciated.
          </Typography>
        </Box>

        <Box sx={styles.sectionStyle} id="feedback">
          <Typography variant="h2" sx={styles.subheadingStyle}>
            22. Feedback & Suggestions
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            We welcome and appreciate any feedback, ideas, or suggestions you
            may provide regarding our Service. By sharing your feedback with
            ComplianceHub, you acknowledge and agree that we may use, reproduce,
            modify, publish, or distribute such feedback for any purpose without
            any obligation, compensation, or attribution to you.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            You hereby grant us a non-exclusive, worldwide, royalty-free, and
            perpetual license to incorporate your suggestions into our products
            and services, helping us to enhance and improve the overall user
            experience. Please be assured that you will not submit any
            confidential or proprietary information as feedback unless you
            explicitly agree otherwise.
          </Typography>
          <Typography sx={styles.paragraphStyle}>
            Thank you for using ComplianceHub's services responsibly.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsAndConditionsPage;
