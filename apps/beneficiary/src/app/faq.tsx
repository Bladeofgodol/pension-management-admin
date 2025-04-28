'use client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from '@mui/material';

export default function FAQ() {
  const faqItems = [
    {
      question: 'What is the purpose of this pension portal?',
      answer:
        'This portal allows beneficiaries to track their pension contributions, monitor payments from employers, apply for retirement benefits, and report any issues with contributions.',
    },
    {
      question: 'How are my pension contributions calculated?',
      answer:
        "Pension contributions are typically calculated as a percentage of your gross salary. The exact percentage depends on your employment contract and the pension scheme you're enrolled in. Both you and your employer contribute to your pension fund.",
    },
    {
      question: 'When can I apply for retirement benefits?',
      answer:
        'You can apply for retirement benefits when you reach the retirement age specified in your pension scheme, which is typically between 60-65 years. Early retirement options may be available depending on your specific pension plan and years of service.',
    },
    {
      question:
        'What should I do if my employer is not making the required contributions?',
      answer:
        "If you notice that your employer is not making the required contributions, you should first try to resolve the issue directly with your employer or HR department. If the issue persists, you can use the 'Report Employer' feature on this portal to file a formal complaint.",
    },
    {
      question: 'How do I update my personal information?',
      answer:
        "To update your personal information such as address, phone number, or bank details, navigate to your profile settings by clicking on your avatar in the top-right corner of the screen and selecting 'Profile Settings'.",
    },
    {
      question: 'What happens to my pension if I change employers?',
      answer:
        'Your pension contributions remain in your account even if you change employers. Your new employer will start making contributions to the same pension account. If you move to a different pension scheme, you may have options to transfer your benefits or maintain multiple pension accounts.',
    },
    {
      question: 'How can I check my expected retirement benefits?',
      answer:
        "Your expected retirement benefits are displayed on the dashboard under 'Expected revenue'. This is an estimate based on your current contributions and projected growth. For a more detailed projection, you can use the retirement calculator available in the tools section.",
    },
    {
      question: 'What documents do I need to apply for retirement?',
      answer:
        'To apply for retirement, you typically need your national ID or passport, proof of employment history, bank account details, and any other documents specified by your pension scheme. The exact requirements will be displayed when you start the retirement application process.',
    },
    {
      question: 'How long does it take to process a retirement application?',
      answer:
        "Processing a retirement application typically takes 30-60 days from the date of submission, provided all required documents are in order. You can check the status of your application in the 'Applications' section of your profile.",
    },
    {
      question: 'Can I withdraw my pension before retirement age?',
      answer:
        'Early withdrawal of pension funds is generally restricted and may incur penalties. However, some schemes allow partial withdrawals under specific circumstances such as critical illness, housing, or education. Check your specific pension scheme rules for details on early withdrawal options.',
    },
  ];

  return (
    <div>
      {/* Header */}

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4">
        <Paper elevation={0} className="p-6 mb-8">
          <Typography variant="h4" className="text-center mb-2 font-bold">
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            className="text-center mb-8 text-gray-600"
          >
            Find answers to common questions about your pension benefits and the
            portal
          </Typography>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                elevation={0}
                className="border border-gray-200 mb-4 rounded-lg"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  className="bg-gray-50"
                >
                  <Typography className="font-medium">
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-gray-700">
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg max-w-3xl mx-auto">
            <Typography variant="h6" className="mb-2 font-medium">
              Still have questions?
            </Typography>
            <Typography variant="body1" className="mb-4 text-gray-700">
              If you couldn't find the answer to your question, please contact
              our support team.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 p-4 bg-white rounded-lg border border-gray-200">
                <Typography variant="subtitle1" className="font-medium mb-1">
                  Email Support
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  support@pensionportal.com
                </Typography>
              </div>
              <div className="flex-1 p-4 bg-white rounded-lg border border-gray-200">
                <Typography variant="subtitle1" className="font-medium mb-1">
                  Phone Support
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  +1 (800) 123-4567
                </Typography>
                <Typography variant="caption" className="text-gray-500">
                  Monday to Friday, 9am - 5pm
                </Typography>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
