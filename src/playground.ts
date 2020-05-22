import * as util from 'util'

import { makeResources } from './Resource'

// @ts-ignore
const resources = makeResources({
  definitions: {
    Account: {
      description:
        'A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.',
      properties: {
        resourceType: {
          description: 'This is a Account resource',
          const: 'Account'
        },
        id: {
          description:
            'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
          $ref: '#/definitions/id'
        },
        meta: {
          description:
            'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
          $ref: '#/definitions/Meta'
        },
        implicitRules: {
          description:
            'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
          $ref: '#/definitions/uri'
        },
        _implicitRules: {
          description: 'Extensions for implicitRules',
          $ref: '#/definitions/Element'
        },
        language: {
          description: 'The base language in which the resource is written.',
          $ref: '#/definitions/code'
        },
        _language: {
          description: 'Extensions for language',
          $ref: '#/definitions/Element'
        },
        text: {
          description:
            'A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.',
          $ref: '#/definitions/Narrative'
        },
        contained: {
          description:
            'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
          items: {
            $ref: '#/definitions/ResourceList'
          },
          type: 'array'
        },
        extension: {
          description:
            'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
          items: {
            $ref: '#/definitions/Extension'
          },
          type: 'array'
        },
        modifierExtension: {
          description:
            "May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          items: {
            $ref: '#/definitions/Extension'
          },
          type: 'array'
        },
        identifier: {
          description:
            'Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).',
          items: {
            $ref: '#/definitions/Identifier'
          },
          type: 'array'
        },
        status: {
          description: 'Indicates whether the account is presently used/usable or not.',
          enum: ['active', 'inactive', 'entered-in-error', 'on-hold', 'unknown']
        },
        _status: {
          description: 'Extensions for status',
          $ref: '#/definitions/Element'
        },
        type: {
          description: 'Categorizes the account for reporting and searching purposes.',
          $ref: '#/definitions/CodeableConcept'
        },
        name: {
          description: 'Name used for the account when displaying it to humans in reports, etc.',
          $ref: '#/definitions/string'
        },
        _name: {
          description: 'Extensions for name',
          $ref: '#/definitions/Element'
        },
        subject: {
          description:
            'Identifies the entity which incurs the expenses. While the immediate recipients of services or goods might be entities related to the subject, the expenses were ultimately incurred by the subject of the Account.',
          items: {
            $ref: '#/definitions/Reference'
          },
          type: 'array'
        },
        servicePeriod: {
          description: 'The date range of services associated with this account.',
          $ref: '#/definitions/Period'
        },
        coverage: {
          description:
            'The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.',
          items: {
            $ref: '#/definitions/Account_Coverage'
          },
          type: 'array'
        },
        owner: {
          description:
            'Indicates the service area, hospital, department, etc. with responsibility for managing the Account.',
          $ref: '#/definitions/Reference'
        },
        description: {
          description: 'Provides additional information about what the account tracks and how it is used.',
          $ref: '#/definitions/string'
        },
        _description: {
          description: 'Extensions for description',
          $ref: '#/definitions/Element'
        },
        guarantor: {
          description: 'The parties responsible for balancing the account if other payment options fall short.',
          items: {
            $ref: '#/definitions/Account_Guarantor'
          },
          type: 'array'
        },
        partOf: {
          description: 'Reference to a parent Account.',
          $ref: '#/definitions/Reference'
        }
      },
      additionalProperties: false,
      required: ['resourceType']
    }
  }
})

console.log(util.inspect(resources, { depth: null }))
