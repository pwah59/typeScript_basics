import assert from 'assert';


class BankCustomer {
    private name: string;
    private secret: string;

    constructor(name: string, secret: string) {
        this.name = name;
        this.secret = secret;
    }

    getName(): string {
        return this.name;
    }

    verifyPinInput(pin: string): boolean {
        return (pin === this.secret)
    }
    // fin classe 
}

// Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));