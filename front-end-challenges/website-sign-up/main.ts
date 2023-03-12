const $form: HTMLFormElement = document.querySelector('#sign-up');
const $thankYou: HTMLDivElement = document.querySelector('#thank-you-screen');
const $customerInfo: HTMLDivElement = document.querySelector('#customer-info');
$form.addEventListener('submit', formSubmission);

function formSubmission(event: SubmitEvent) {
  event.preventDefault();
  $form.className = 'hidden';
  $thankYou.className = '';

  const customer = {
    name: $form.username.value,
    email: $form.email.value,
    card: $form.card.value,
    subscribe: $form.subscribe.value
  }

  const $domTree = processCustomer(customer);
  $customerInfo.appendChild($domTree);
}

function processCustomer(customer: any): Node {
  const $customerContainer = document.createElement('div');

  const greeting = document.createElement('h4');
  greeting.textContent = `Thank you, ${customer.name} for your purchase`;

  const card = document.createElement('p');
  let cardName = '';
  if (customer.card === 'visa') {
    cardName = 'Visa';
  } else if (customer.card === 'master') {
    cardName = 'Mastercard';
  } else if (customer.card === 'amex') {
    cardName = 'American Express'
  }
  card.textContent = `Your ${cardName} will be charged: $1,000.`

  const paragraph = document.createElement('p');
  paragraph.textContent = `An email will be sent to your account at: ${customer.email}`

  const finalSendOff = document.createElement('p');
  finalSendOff.textContent = customer.subscribe === 'yes'
    ? `Thank you for subscribing to our emails.
    You will receive an email weekly with our latest products`
    : `We are sorry you did not subscribe to our emails.
    Hope you will purchase from us again soon!`

  $customerContainer.appendChild(greeting);
  $customerContainer.appendChild(card);
  $customerContainer.appendChild(paragraph);
  $customerContainer.appendChild(finalSendOff);

  return $customerContainer;
  }
