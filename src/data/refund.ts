import { SITE_NAME } from "@/lib/constants";
import { footerContact } from "@/data/site";

const supportEmail = footerContact.email;

export const refundPage = {
  title: "Refund Policy",
  intro: `At ${SITE_NAME}, we strive to provide high-quality design and development services to our clients. We understand that occasionally, situations may arise that require refunds. This policy outlines our refund procedures for our various services.`,
  sections: [
    {
      title: "Design Services",
      paragraphs: [
        "Logo Design, Graphic Design, UI/UX Design: If a project has not yet entered the design phase and the client requests a refund, a full refund will be provided. Once the design phase has commenced, a partial refund will be considered based on the amount of work completed. No refund will be issued once the final design files have been delivered to the client.",
      ],
    },
    {
      title: "Development Services",
      paragraphs: [
        "Website Development: For website development projects, a refund may be requested before the development phase begins, in which case a full refund will be provided. If the development has started, a partial refund will be considered based on the development progress. No refund will be provided once the website has been deployed to the client's server.",
        "Combined Design and Development Services: For projects that include both design and development services, the refund policy outlined above for design and development will apply separately to each phase of the project.",
      ],
    },
    {
      title: "Refund Process",
      paragraphs: [
        `Requesting a Refund: To request a refund, clients must submit a written request to ${supportEmail} within 7 days of the project initiation date. The request should include the reasons for the refund and any relevant supporting documentation.`,
        "Refund Evaluation: Upon receiving the refund request, our team will assess the project's status and the reasons provided for the refund. We will determine the refund amount based on the progress made and the terms outlined in the relevant section of this policy.",
        "Refund Notification: We will notify the client of our decision within 7 days of receiving the refund request. If the refund is approved, we will specify the amount and provide information about the refund process.",
        "Refund Policy for Discounted Coupons and Annual Fees: Please be advised that discounted coupons and annual fees are non-refundable. This policy helps us maintain the quality of our services and offers. We appreciate your understanding.",
      ],
    },
    {
      title: "Non-Refundable Circumstances",
      paragraphs: ["Refunds will not be provided in the following circumstances:"],
      items: [
        "The client has approved the final design or development files.",
        "The client has used or implemented any part of the delivered work.",
        "Changes in the client's project requirements or objectives after the project initiation.",
      ],
    },
    {
      title: "Payment Processing",
      paragraphs: [
        "Refunds will be processed within 7 days of the client's acceptance of the refund terms. The refund will be issued using the same payment method used for the original transaction.",
      ],
    },
    {
      title: "Modification of Policies",
      paragraphs: [
        `${SITE_NAME} reserves the right to modify this refund policy at any time without prior notice. Changes to the policy will be effective immediately upon posting on our website or providing notice to clients.`,
        `By engaging in a project with ${SITE_NAME}, clients acknowledge and agree to adhere to the terms outlined in this refund policy.`,
        `If you have any questions or concerns regarding our refund policies, please contact our support team at ${supportEmail}.`,
      ],
    },
  ],
} as const;
