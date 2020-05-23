import * as t from 'io-ts'
import { FhirBoolean } from './FhirBoolean'
import { FhirCode } from './FhirCode'
import { FhirCodeableConcept } from './FhirCodeableConcept'
import { FhirContactDetail } from './FhirContactDetail'
import { FhirDateTime } from './FhirDateTime'
import { FhirElement } from './FhirElement'
import { FhirExtension } from './FhirExtension'
import { FhirId } from './FhirId'
import { FhirImplementationGuide_Definition } from './FhirImplementationGuide_Definition'
import { FhirImplementationGuide_DependsOn } from './FhirImplementationGuide_DependsOn'
import { FhirImplementationGuide_Global } from './FhirImplementationGuide_Global'
import { FhirImplementationGuide_Manifest } from './FhirImplementationGuide_Manifest'
import { FhirMarkdown } from './FhirMarkdown'
import { FhirMeta } from './FhirMeta'
import { FhirNarrative } from './FhirNarrative'
import { FhirResourceList } from './FhirResourceList'
import { FhirString } from './FhirString'
import { FhirUri } from './FhirUri'
import { FhirUsageContext } from './FhirUsageContext'

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export const FhirImplementationGuide: t.Type<FhirImplementationGuide, FhirImplementationGuideOutput> = t.recursion(
  'FhirImplementationGuide',
  () =>
    t.intersection([
      t.type({
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        resourceType: t.readonly(t.literal('ImplementationGuide')),
      }),
      t.partial({
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _copyright: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _date: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _description: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _experimental: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _fhirVersion: t.readonlyArray(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _implicitRules: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _language: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _license: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _name: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _packageId: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _publisher: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _status: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _title: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _url: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        _version: t.readonly(FhirElement),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        contact: t.readonlyArray(FhirContactDetail),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        contained: t.readonlyArray(FhirResourceList),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        copyright: t.readonly(FhirMarkdown),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        date: t.readonly(FhirDateTime),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        definition: t.readonly(FhirImplementationGuide_Definition),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        dependsOn: t.readonlyArray(FhirImplementationGuide_DependsOn),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        description: t.readonly(FhirMarkdown),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        experimental: t.readonly(FhirBoolean),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        extension: t.readonlyArray(FhirExtension),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        fhirVersion: t.readonlyArray(
          t.keyof({
            '0.01': null,
            '0.05': null,
            '0.06': null,
            '0.11': null,
            '0.0.80': null,
            '0.0.81': null,
            '0.0.82': null,
            '0.4.0': null,
            '0.5.0': null,
            '1.0.0': null,
            '1.0.1': null,
            '1.0.2': null,
            '1.1.0': null,
            '1.4.0': null,
            '1.6.0': null,
            '1.8.0': null,
            '3.0.0': null,
            '3.0.1': null,
            '3.3.0': null,
            '3.5.0': null,
            '4.0.0': null,
            '4.0.1': null,
          })
        ),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        global: t.readonlyArray(FhirImplementationGuide_Global),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        id: t.readonly(FhirId),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        implicitRules: t.readonly(FhirUri),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        jurisdiction: t.readonlyArray(FhirCodeableConcept),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        language: t.readonly(FhirCode),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        license: t.readonly(
          t.keyof({
            'not-open-source': null,
            '0BSD': null,
            AAL: null,
            Abstyles: null,
            'Adobe-2006': null,
            'Adobe-Glyph': null,
            ADSL: null,
            'AFL-1.1': null,
            'AFL-1.2': null,
            'AFL-2.0': null,
            'AFL-2.1': null,
            'AFL-3.0': null,
            Afmparse: null,
            'AGPL-1.0-only': null,
            'AGPL-1.0-or-later': null,
            'AGPL-3.0-only': null,
            'AGPL-3.0-or-later': null,
            Aladdin: null,
            AMDPLPA: null,
            AML: null,
            AMPAS: null,
            'ANTLR-PD': null,
            'Apache-1.0': null,
            'Apache-1.1': null,
            'Apache-2.0': null,
            APAFML: null,
            'APL-1.0': null,
            'APSL-1.0': null,
            'APSL-1.1': null,
            'APSL-1.2': null,
            'APSL-2.0': null,
            'Artistic-1.0-cl8': null,
            'Artistic-1.0-Perl': null,
            'Artistic-1.0': null,
            'Artistic-2.0': null,
            Bahyph: null,
            Barr: null,
            Beerware: null,
            'BitTorrent-1.0': null,
            'BitTorrent-1.1': null,
            Borceux: null,
            'BSD-1-Clause': null,
            'BSD-2-Clause-FreeBSD': null,
            'BSD-2-Clause-NetBSD': null,
            'BSD-2-Clause-Patent': null,
            'BSD-2-Clause': null,
            'BSD-3-Clause-Attribution': null,
            'BSD-3-Clause-Clear': null,
            'BSD-3-Clause-LBNL': null,
            'BSD-3-Clause-No-Nuclear-License-2014': null,
            'BSD-3-Clause-No-Nuclear-License': null,
            'BSD-3-Clause-No-Nuclear-Warranty': null,
            'BSD-3-Clause': null,
            'BSD-4-Clause-UC': null,
            'BSD-4-Clause': null,
            'BSD-Protection': null,
            'BSD-Source-Code': null,
            'BSL-1.0': null,
            'bzip2-1.0.5': null,
            'bzip2-1.0.6': null,
            Caldera: null,
            'CATOSL-1.1': null,
            'CC-BY-1.0': null,
            'CC-BY-2.0': null,
            'CC-BY-2.5': null,
            'CC-BY-3.0': null,
            'CC-BY-4.0': null,
            'CC-BY-NC-1.0': null,
            'CC-BY-NC-2.0': null,
            'CC-BY-NC-2.5': null,
            'CC-BY-NC-3.0': null,
            'CC-BY-NC-4.0': null,
            'CC-BY-NC-ND-1.0': null,
            'CC-BY-NC-ND-2.0': null,
            'CC-BY-NC-ND-2.5': null,
            'CC-BY-NC-ND-3.0': null,
            'CC-BY-NC-ND-4.0': null,
            'CC-BY-NC-SA-1.0': null,
            'CC-BY-NC-SA-2.0': null,
            'CC-BY-NC-SA-2.5': null,
            'CC-BY-NC-SA-3.0': null,
            'CC-BY-NC-SA-4.0': null,
            'CC-BY-ND-1.0': null,
            'CC-BY-ND-2.0': null,
            'CC-BY-ND-2.5': null,
            'CC-BY-ND-3.0': null,
            'CC-BY-ND-4.0': null,
            'CC-BY-SA-1.0': null,
            'CC-BY-SA-2.0': null,
            'CC-BY-SA-2.5': null,
            'CC-BY-SA-3.0': null,
            'CC-BY-SA-4.0': null,
            'CC0-1.0': null,
            'CDDL-1.0': null,
            'CDDL-1.1': null,
            'CDLA-Permissive-1.0': null,
            'CDLA-Sharing-1.0': null,
            'CECILL-1.0': null,
            'CECILL-1.1': null,
            'CECILL-2.0': null,
            'CECILL-2.1': null,
            'CECILL-B': null,
            'CECILL-C': null,
            ClArtistic: null,
            'CNRI-Jython': null,
            'CNRI-Python-GPL-Compatible': null,
            'CNRI-Python': null,
            'Condor-1.1': null,
            'CPAL-1.0': null,
            'CPL-1.0': null,
            'CPOL-1.02': null,
            Crossword: null,
            CrystalStacker: null,
            'CUA-OPL-1.0': null,
            Cube: null,
            curl: null,
            'D-FSL-1.0': null,
            diffmark: null,
            DOC: null,
            Dotseqn: null,
            DSDP: null,
            dvipdfm: null,
            'ECL-1.0': null,
            'ECL-2.0': null,
            'EFL-1.0': null,
            'EFL-2.0': null,
            eGenix: null,
            Entessa: null,
            'EPL-1.0': null,
            'EPL-2.0': null,
            'ErlPL-1.1': null,
            EUDatagrid: null,
            'EUPL-1.0': null,
            'EUPL-1.1': null,
            'EUPL-1.2': null,
            Eurosym: null,
            Fair: null,
            'Frameworx-1.0': null,
            FreeImage: null,
            FSFAP: null,
            FSFUL: null,
            FSFULLR: null,
            FTL: null,
            'GFDL-1.1-only': null,
            'GFDL-1.1-or-later': null,
            'GFDL-1.2-only': null,
            'GFDL-1.2-or-later': null,
            'GFDL-1.3-only': null,
            'GFDL-1.3-or-later': null,
            Giftware: null,
            GL2PS: null,
            Glide: null,
            Glulxe: null,
            gnuplot: null,
            'GPL-1.0-only': null,
            'GPL-1.0-or-later': null,
            'GPL-2.0-only': null,
            'GPL-2.0-or-later': null,
            'GPL-3.0-only': null,
            'GPL-3.0-or-later': null,
            'gSOAP-1.3b': null,
            HaskellReport: null,
            HPND: null,
            'IBM-pibs': null,
            ICU: null,
            IJG: null,
            ImageMagick: null,
            iMatix: null,
            Imlib2: null,
            'Info-ZIP': null,
            'Intel-ACPI': null,
            Intel: null,
            'Interbase-1.0': null,
            IPA: null,
            'IPL-1.0': null,
            ISC: null,
            'JasPer-2.0': null,
            JSON: null,
            'LAL-1.2': null,
            'LAL-1.3': null,
            Latex2e: null,
            Leptonica: null,
            'LGPL-2.0-only': null,
            'LGPL-2.0-or-later': null,
            'LGPL-2.1-only': null,
            'LGPL-2.1-or-later': null,
            'LGPL-3.0-only': null,
            'LGPL-3.0-or-later': null,
            LGPLLR: null,
            Libpng: null,
            libtiff: null,
            'LiLiQ-P-1.1': null,
            'LiLiQ-R-1.1': null,
            'LiLiQ-Rplus-1.1': null,
            'Linux-OpenIB': null,
            'LPL-1.0': null,
            'LPL-1.02': null,
            'LPPL-1.0': null,
            'LPPL-1.1': null,
            'LPPL-1.2': null,
            'LPPL-1.3a': null,
            'LPPL-1.3c': null,
            MakeIndex: null,
            MirOS: null,
            'MIT-0': null,
            'MIT-advertising': null,
            'MIT-CMU': null,
            'MIT-enna': null,
            'MIT-feh': null,
            MIT: null,
            MITNFA: null,
            Motosoto: null,
            mpich2: null,
            'MPL-1.0': null,
            'MPL-1.1': null,
            'MPL-2.0-no-copyleft-exception': null,
            'MPL-2.0': null,
            'MS-PL': null,
            'MS-RL': null,
            MTLL: null,
            Multics: null,
            Mup: null,
            'NASA-1.3': null,
            Naumen: null,
            'NBPL-1.0': null,
            NCSA: null,
            'Net-SNMP': null,
            NetCDF: null,
            Newsletr: null,
            NGPL: null,
            'NLOD-1.0': null,
            NLPL: null,
            Nokia: null,
            NOSL: null,
            Noweb: null,
            'NPL-1.0': null,
            'NPL-1.1': null,
            'NPOSL-3.0': null,
            NRL: null,
            NTP: null,
            'OCCT-PL': null,
            'OCLC-2.0': null,
            'ODbL-1.0': null,
            'OFL-1.0': null,
            'OFL-1.1': null,
            OGTSL: null,
            'OLDAP-1.1': null,
            'OLDAP-1.2': null,
            'OLDAP-1.3': null,
            'OLDAP-1.4': null,
            'OLDAP-2.0.1': null,
            'OLDAP-2.0': null,
            'OLDAP-2.1': null,
            'OLDAP-2.2.1': null,
            'OLDAP-2.2.2': null,
            'OLDAP-2.2': null,
            'OLDAP-2.3': null,
            'OLDAP-2.4': null,
            'OLDAP-2.5': null,
            'OLDAP-2.6': null,
            'OLDAP-2.7': null,
            'OLDAP-2.8': null,
            OML: null,
            OpenSSL: null,
            'OPL-1.0': null,
            'OSET-PL-2.1': null,
            'OSL-1.0': null,
            'OSL-1.1': null,
            'OSL-2.0': null,
            'OSL-2.1': null,
            'OSL-3.0': null,
            'PDDL-1.0': null,
            'PHP-3.0': null,
            'PHP-3.01': null,
            Plexus: null,
            PostgreSQL: null,
            psfrag: null,
            psutils: null,
            'Python-2.0': null,
            Qhull: null,
            'QPL-1.0': null,
            Rdisc: null,
            'RHeCos-1.1': null,
            'RPL-1.1': null,
            'RPL-1.5': null,
            'RPSL-1.0': null,
            'RSA-MD': null,
            RSCPL: null,
            Ruby: null,
            'SAX-PD': null,
            Saxpath: null,
            SCEA: null,
            Sendmail: null,
            'SGI-B-1.0': null,
            'SGI-B-1.1': null,
            'SGI-B-2.0': null,
            'SimPL-2.0': null,
            'SISSL-1.2': null,
            SISSL: null,
            Sleepycat: null,
            SMLNJ: null,
            SMPPL: null,
            SNIA: null,
            'Spencer-86': null,
            'Spencer-94': null,
            'Spencer-99': null,
            'SPL-1.0': null,
            'SugarCRM-1.1.3': null,
            SWL: null,
            TCL: null,
            'TCP-wrappers': null,
            TMate: null,
            'TORQUE-1.1': null,
            TOSL: null,
            'Unicode-DFS-2015': null,
            'Unicode-DFS-2016': null,
            'Unicode-TOU': null,
            Unlicense: null,
            'UPL-1.0': null,
            Vim: null,
            VOSTROM: null,
            'VSL-1.0': null,
            'W3C-19980720': null,
            'W3C-20150513': null,
            W3C: null,
            'Watcom-1.0': null,
            Wsuipa: null,
            WTFPL: null,
            X11: null,
            Xerox: null,
            'XFree86-1.1': null,
            xinetd: null,
            Xnet: null,
            xpp: null,
            XSkat: null,
            'YPL-1.0': null,
            'YPL-1.1': null,
            Zed: null,
            'Zend-2.0': null,
            'Zimbra-1.3': null,
            'Zimbra-1.4': null,
            'zlib-acknowledgement': null,
            Zlib: null,
            'ZPL-1.1': null,
            'ZPL-2.0': null,
            'ZPL-2.1': null,
          })
        ),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        manifest: t.readonly(FhirImplementationGuide_Manifest),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        meta: t.readonly(FhirMeta),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        modifierExtension: t.readonlyArray(FhirExtension),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        name: t.readonly(FhirString),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        packageId: t.readonly(FhirId),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        publisher: t.readonly(FhirString),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        status: t.readonly(
          t.keyof({
            draft: null,
            active: null,
            retired: null,
            unknown: null,
          })
        ),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        text: t.readonly(FhirNarrative),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        title: t.readonly(FhirString),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        url: t.readonly(FhirUri),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        useContext: t.readonlyArray(FhirUsageContext),
        /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
        version: t.readonly(FhirString),
      }),
    ])
)

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface FhirImplementationGuide {
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _copyright?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _date?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _description?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _experimental?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _fhirVersion?: ReadonlyArray<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _implicitRules?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _language?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _license?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _name?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _packageId?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _publisher?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _status?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _title?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _url?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _version?: Readonly<t.TypeOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  contact?: ReadonlyArray<t.TypeOf<typeof FhirContactDetail>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  contained?: ReadonlyArray<t.TypeOf<typeof FhirResourceList>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  copyright?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  date?: Readonly<t.TypeOf<typeof FhirDateTime>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  definition?: Readonly<t.TypeOf<typeof FhirImplementationGuide_Definition>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  dependsOn?: ReadonlyArray<t.TypeOf<typeof FhirImplementationGuide_DependsOn>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  description?: Readonly<t.TypeOf<typeof FhirMarkdown>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  experimental?: Readonly<t.TypeOf<typeof FhirBoolean>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  extension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  fhirVersion?: ReadonlyArray<
    | '0.01'
    | '0.05'
    | '0.06'
    | '0.11'
    | '0.0.80'
    | '0.0.81'
    | '0.0.82'
    | '0.4.0'
    | '0.5.0'
    | '1.0.0'
    | '1.0.1'
    | '1.0.2'
    | '1.1.0'
    | '1.4.0'
    | '1.6.0'
    | '1.8.0'
    | '3.0.0'
    | '3.0.1'
    | '3.3.0'
    | '3.5.0'
    | '4.0.0'
    | '4.0.1'
  >
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  global?: ReadonlyArray<t.TypeOf<typeof FhirImplementationGuide_Global>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  id?: Readonly<t.TypeOf<typeof FhirId>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  implicitRules?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  jurisdiction?: ReadonlyArray<t.TypeOf<typeof FhirCodeableConcept>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  language?: Readonly<t.TypeOf<typeof FhirCode>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  license?: Readonly<
    | 'not-open-source'
    | '0BSD'
    | 'AAL'
    | 'Abstyles'
    | 'Adobe-2006'
    | 'Adobe-Glyph'
    | 'ADSL'
    | 'AFL-1.1'
    | 'AFL-1.2'
    | 'AFL-2.0'
    | 'AFL-2.1'
    | 'AFL-3.0'
    | 'Afmparse'
    | 'AGPL-1.0-only'
    | 'AGPL-1.0-or-later'
    | 'AGPL-3.0-only'
    | 'AGPL-3.0-or-later'
    | 'Aladdin'
    | 'AMDPLPA'
    | 'AML'
    | 'AMPAS'
    | 'ANTLR-PD'
    | 'Apache-1.0'
    | 'Apache-1.1'
    | 'Apache-2.0'
    | 'APAFML'
    | 'APL-1.0'
    | 'APSL-1.0'
    | 'APSL-1.1'
    | 'APSL-1.2'
    | 'APSL-2.0'
    | 'Artistic-1.0-cl8'
    | 'Artistic-1.0-Perl'
    | 'Artistic-1.0'
    | 'Artistic-2.0'
    | 'Bahyph'
    | 'Barr'
    | 'Beerware'
    | 'BitTorrent-1.0'
    | 'BitTorrent-1.1'
    | 'Borceux'
    | 'BSD-1-Clause'
    | 'BSD-2-Clause-FreeBSD'
    | 'BSD-2-Clause-NetBSD'
    | 'BSD-2-Clause-Patent'
    | 'BSD-2-Clause'
    | 'BSD-3-Clause-Attribution'
    | 'BSD-3-Clause-Clear'
    | 'BSD-3-Clause-LBNL'
    | 'BSD-3-Clause-No-Nuclear-License-2014'
    | 'BSD-3-Clause-No-Nuclear-License'
    | 'BSD-3-Clause-No-Nuclear-Warranty'
    | 'BSD-3-Clause'
    | 'BSD-4-Clause-UC'
    | 'BSD-4-Clause'
    | 'BSD-Protection'
    | 'BSD-Source-Code'
    | 'BSL-1.0'
    | 'bzip2-1.0.5'
    | 'bzip2-1.0.6'
    | 'Caldera'
    | 'CATOSL-1.1'
    | 'CC-BY-1.0'
    | 'CC-BY-2.0'
    | 'CC-BY-2.5'
    | 'CC-BY-3.0'
    | 'CC-BY-4.0'
    | 'CC-BY-NC-1.0'
    | 'CC-BY-NC-2.0'
    | 'CC-BY-NC-2.5'
    | 'CC-BY-NC-3.0'
    | 'CC-BY-NC-4.0'
    | 'CC-BY-NC-ND-1.0'
    | 'CC-BY-NC-ND-2.0'
    | 'CC-BY-NC-ND-2.5'
    | 'CC-BY-NC-ND-3.0'
    | 'CC-BY-NC-ND-4.0'
    | 'CC-BY-NC-SA-1.0'
    | 'CC-BY-NC-SA-2.0'
    | 'CC-BY-NC-SA-2.5'
    | 'CC-BY-NC-SA-3.0'
    | 'CC-BY-NC-SA-4.0'
    | 'CC-BY-ND-1.0'
    | 'CC-BY-ND-2.0'
    | 'CC-BY-ND-2.5'
    | 'CC-BY-ND-3.0'
    | 'CC-BY-ND-4.0'
    | 'CC-BY-SA-1.0'
    | 'CC-BY-SA-2.0'
    | 'CC-BY-SA-2.5'
    | 'CC-BY-SA-3.0'
    | 'CC-BY-SA-4.0'
    | 'CC0-1.0'
    | 'CDDL-1.0'
    | 'CDDL-1.1'
    | 'CDLA-Permissive-1.0'
    | 'CDLA-Sharing-1.0'
    | 'CECILL-1.0'
    | 'CECILL-1.1'
    | 'CECILL-2.0'
    | 'CECILL-2.1'
    | 'CECILL-B'
    | 'CECILL-C'
    | 'ClArtistic'
    | 'CNRI-Jython'
    | 'CNRI-Python-GPL-Compatible'
    | 'CNRI-Python'
    | 'Condor-1.1'
    | 'CPAL-1.0'
    | 'CPL-1.0'
    | 'CPOL-1.02'
    | 'Crossword'
    | 'CrystalStacker'
    | 'CUA-OPL-1.0'
    | 'Cube'
    | 'curl'
    | 'D-FSL-1.0'
    | 'diffmark'
    | 'DOC'
    | 'Dotseqn'
    | 'DSDP'
    | 'dvipdfm'
    | 'ECL-1.0'
    | 'ECL-2.0'
    | 'EFL-1.0'
    | 'EFL-2.0'
    | 'eGenix'
    | 'Entessa'
    | 'EPL-1.0'
    | 'EPL-2.0'
    | 'ErlPL-1.1'
    | 'EUDatagrid'
    | 'EUPL-1.0'
    | 'EUPL-1.1'
    | 'EUPL-1.2'
    | 'Eurosym'
    | 'Fair'
    | 'Frameworx-1.0'
    | 'FreeImage'
    | 'FSFAP'
    | 'FSFUL'
    | 'FSFULLR'
    | 'FTL'
    | 'GFDL-1.1-only'
    | 'GFDL-1.1-or-later'
    | 'GFDL-1.2-only'
    | 'GFDL-1.2-or-later'
    | 'GFDL-1.3-only'
    | 'GFDL-1.3-or-later'
    | 'Giftware'
    | 'GL2PS'
    | 'Glide'
    | 'Glulxe'
    | 'gnuplot'
    | 'GPL-1.0-only'
    | 'GPL-1.0-or-later'
    | 'GPL-2.0-only'
    | 'GPL-2.0-or-later'
    | 'GPL-3.0-only'
    | 'GPL-3.0-or-later'
    | 'gSOAP-1.3b'
    | 'HaskellReport'
    | 'HPND'
    | 'IBM-pibs'
    | 'ICU'
    | 'IJG'
    | 'ImageMagick'
    | 'iMatix'
    | 'Imlib2'
    | 'Info-ZIP'
    | 'Intel-ACPI'
    | 'Intel'
    | 'Interbase-1.0'
    | 'IPA'
    | 'IPL-1.0'
    | 'ISC'
    | 'JasPer-2.0'
    | 'JSON'
    | 'LAL-1.2'
    | 'LAL-1.3'
    | 'Latex2e'
    | 'Leptonica'
    | 'LGPL-2.0-only'
    | 'LGPL-2.0-or-later'
    | 'LGPL-2.1-only'
    | 'LGPL-2.1-or-later'
    | 'LGPL-3.0-only'
    | 'LGPL-3.0-or-later'
    | 'LGPLLR'
    | 'Libpng'
    | 'libtiff'
    | 'LiLiQ-P-1.1'
    | 'LiLiQ-R-1.1'
    | 'LiLiQ-Rplus-1.1'
    | 'Linux-OpenIB'
    | 'LPL-1.0'
    | 'LPL-1.02'
    | 'LPPL-1.0'
    | 'LPPL-1.1'
    | 'LPPL-1.2'
    | 'LPPL-1.3a'
    | 'LPPL-1.3c'
    | 'MakeIndex'
    | 'MirOS'
    | 'MIT-0'
    | 'MIT-advertising'
    | 'MIT-CMU'
    | 'MIT-enna'
    | 'MIT-feh'
    | 'MIT'
    | 'MITNFA'
    | 'Motosoto'
    | 'mpich2'
    | 'MPL-1.0'
    | 'MPL-1.1'
    | 'MPL-2.0-no-copyleft-exception'
    | 'MPL-2.0'
    | 'MS-PL'
    | 'MS-RL'
    | 'MTLL'
    | 'Multics'
    | 'Mup'
    | 'NASA-1.3'
    | 'Naumen'
    | 'NBPL-1.0'
    | 'NCSA'
    | 'Net-SNMP'
    | 'NetCDF'
    | 'Newsletr'
    | 'NGPL'
    | 'NLOD-1.0'
    | 'NLPL'
    | 'Nokia'
    | 'NOSL'
    | 'Noweb'
    | 'NPL-1.0'
    | 'NPL-1.1'
    | 'NPOSL-3.0'
    | 'NRL'
    | 'NTP'
    | 'OCCT-PL'
    | 'OCLC-2.0'
    | 'ODbL-1.0'
    | 'OFL-1.0'
    | 'OFL-1.1'
    | 'OGTSL'
    | 'OLDAP-1.1'
    | 'OLDAP-1.2'
    | 'OLDAP-1.3'
    | 'OLDAP-1.4'
    | 'OLDAP-2.0.1'
    | 'OLDAP-2.0'
    | 'OLDAP-2.1'
    | 'OLDAP-2.2.1'
    | 'OLDAP-2.2.2'
    | 'OLDAP-2.2'
    | 'OLDAP-2.3'
    | 'OLDAP-2.4'
    | 'OLDAP-2.5'
    | 'OLDAP-2.6'
    | 'OLDAP-2.7'
    | 'OLDAP-2.8'
    | 'OML'
    | 'OpenSSL'
    | 'OPL-1.0'
    | 'OSET-PL-2.1'
    | 'OSL-1.0'
    | 'OSL-1.1'
    | 'OSL-2.0'
    | 'OSL-2.1'
    | 'OSL-3.0'
    | 'PDDL-1.0'
    | 'PHP-3.0'
    | 'PHP-3.01'
    | 'Plexus'
    | 'PostgreSQL'
    | 'psfrag'
    | 'psutils'
    | 'Python-2.0'
    | 'Qhull'
    | 'QPL-1.0'
    | 'Rdisc'
    | 'RHeCos-1.1'
    | 'RPL-1.1'
    | 'RPL-1.5'
    | 'RPSL-1.0'
    | 'RSA-MD'
    | 'RSCPL'
    | 'Ruby'
    | 'SAX-PD'
    | 'Saxpath'
    | 'SCEA'
    | 'Sendmail'
    | 'SGI-B-1.0'
    | 'SGI-B-1.1'
    | 'SGI-B-2.0'
    | 'SimPL-2.0'
    | 'SISSL-1.2'
    | 'SISSL'
    | 'Sleepycat'
    | 'SMLNJ'
    | 'SMPPL'
    | 'SNIA'
    | 'Spencer-86'
    | 'Spencer-94'
    | 'Spencer-99'
    | 'SPL-1.0'
    | 'SugarCRM-1.1.3'
    | 'SWL'
    | 'TCL'
    | 'TCP-wrappers'
    | 'TMate'
    | 'TORQUE-1.1'
    | 'TOSL'
    | 'Unicode-DFS-2015'
    | 'Unicode-DFS-2016'
    | 'Unicode-TOU'
    | 'Unlicense'
    | 'UPL-1.0'
    | 'Vim'
    | 'VOSTROM'
    | 'VSL-1.0'
    | 'W3C-19980720'
    | 'W3C-20150513'
    | 'W3C'
    | 'Watcom-1.0'
    | 'Wsuipa'
    | 'WTFPL'
    | 'X11'
    | 'Xerox'
    | 'XFree86-1.1'
    | 'xinetd'
    | 'Xnet'
    | 'xpp'
    | 'XSkat'
    | 'YPL-1.0'
    | 'YPL-1.1'
    | 'Zed'
    | 'Zend-2.0'
    | 'Zimbra-1.3'
    | 'Zimbra-1.4'
    | 'zlib-acknowledgement'
    | 'Zlib'
    | 'ZPL-1.1'
    | 'ZPL-2.0'
    | 'ZPL-2.1'
  >
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  manifest?: Readonly<t.TypeOf<typeof FhirImplementationGuide_Manifest>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  meta?: Readonly<t.TypeOf<typeof FhirMeta>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  modifierExtension?: ReadonlyArray<t.TypeOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  name?: Readonly<t.TypeOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  packageId?: Readonly<t.TypeOf<typeof FhirId>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  publisher?: Readonly<t.TypeOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  resourceType: Readonly<'ImplementationGuide'>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  text?: Readonly<t.TypeOf<typeof FhirNarrative>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  title?: Readonly<t.TypeOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  url?: Readonly<t.TypeOf<typeof FhirUri>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  useContext?: ReadonlyArray<t.TypeOf<typeof FhirUsageContext>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  version?: Readonly<t.TypeOf<typeof FhirString>>
}
/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface FhirImplementationGuideOutput {
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _copyright?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _date?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _description?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _experimental?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _fhirVersion?: ReadonlyArray<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _implicitRules?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _language?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _license?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _name?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _packageId?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _publisher?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _status?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _title?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _url?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  _version?: Readonly<t.OutputOf<typeof FhirElement>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  contact?: ReadonlyArray<t.OutputOf<typeof FhirContactDetail>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  contained?: ReadonlyArray<t.OutputOf<typeof FhirResourceList>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  copyright?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  date?: Readonly<t.OutputOf<typeof FhirDateTime>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  definition?: Readonly<t.OutputOf<typeof FhirImplementationGuide_Definition>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  dependsOn?: ReadonlyArray<t.OutputOf<typeof FhirImplementationGuide_DependsOn>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  description?: Readonly<t.OutputOf<typeof FhirMarkdown>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  experimental?: Readonly<t.OutputOf<typeof FhirBoolean>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  extension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  fhirVersion?: ReadonlyArray<
    | '0.01'
    | '0.05'
    | '0.06'
    | '0.11'
    | '0.0.80'
    | '0.0.81'
    | '0.0.82'
    | '0.4.0'
    | '0.5.0'
    | '1.0.0'
    | '1.0.1'
    | '1.0.2'
    | '1.1.0'
    | '1.4.0'
    | '1.6.0'
    | '1.8.0'
    | '3.0.0'
    | '3.0.1'
    | '3.3.0'
    | '3.5.0'
    | '4.0.0'
    | '4.0.1'
  >
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  global?: ReadonlyArray<t.OutputOf<typeof FhirImplementationGuide_Global>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  id?: Readonly<t.OutputOf<typeof FhirId>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  implicitRules?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  jurisdiction?: ReadonlyArray<t.OutputOf<typeof FhirCodeableConcept>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  language?: Readonly<t.OutputOf<typeof FhirCode>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  license?: Readonly<
    | 'not-open-source'
    | '0BSD'
    | 'AAL'
    | 'Abstyles'
    | 'Adobe-2006'
    | 'Adobe-Glyph'
    | 'ADSL'
    | 'AFL-1.1'
    | 'AFL-1.2'
    | 'AFL-2.0'
    | 'AFL-2.1'
    | 'AFL-3.0'
    | 'Afmparse'
    | 'AGPL-1.0-only'
    | 'AGPL-1.0-or-later'
    | 'AGPL-3.0-only'
    | 'AGPL-3.0-or-later'
    | 'Aladdin'
    | 'AMDPLPA'
    | 'AML'
    | 'AMPAS'
    | 'ANTLR-PD'
    | 'Apache-1.0'
    | 'Apache-1.1'
    | 'Apache-2.0'
    | 'APAFML'
    | 'APL-1.0'
    | 'APSL-1.0'
    | 'APSL-1.1'
    | 'APSL-1.2'
    | 'APSL-2.0'
    | 'Artistic-1.0-cl8'
    | 'Artistic-1.0-Perl'
    | 'Artistic-1.0'
    | 'Artistic-2.0'
    | 'Bahyph'
    | 'Barr'
    | 'Beerware'
    | 'BitTorrent-1.0'
    | 'BitTorrent-1.1'
    | 'Borceux'
    | 'BSD-1-Clause'
    | 'BSD-2-Clause-FreeBSD'
    | 'BSD-2-Clause-NetBSD'
    | 'BSD-2-Clause-Patent'
    | 'BSD-2-Clause'
    | 'BSD-3-Clause-Attribution'
    | 'BSD-3-Clause-Clear'
    | 'BSD-3-Clause-LBNL'
    | 'BSD-3-Clause-No-Nuclear-License-2014'
    | 'BSD-3-Clause-No-Nuclear-License'
    | 'BSD-3-Clause-No-Nuclear-Warranty'
    | 'BSD-3-Clause'
    | 'BSD-4-Clause-UC'
    | 'BSD-4-Clause'
    | 'BSD-Protection'
    | 'BSD-Source-Code'
    | 'BSL-1.0'
    | 'bzip2-1.0.5'
    | 'bzip2-1.0.6'
    | 'Caldera'
    | 'CATOSL-1.1'
    | 'CC-BY-1.0'
    | 'CC-BY-2.0'
    | 'CC-BY-2.5'
    | 'CC-BY-3.0'
    | 'CC-BY-4.0'
    | 'CC-BY-NC-1.0'
    | 'CC-BY-NC-2.0'
    | 'CC-BY-NC-2.5'
    | 'CC-BY-NC-3.0'
    | 'CC-BY-NC-4.0'
    | 'CC-BY-NC-ND-1.0'
    | 'CC-BY-NC-ND-2.0'
    | 'CC-BY-NC-ND-2.5'
    | 'CC-BY-NC-ND-3.0'
    | 'CC-BY-NC-ND-4.0'
    | 'CC-BY-NC-SA-1.0'
    | 'CC-BY-NC-SA-2.0'
    | 'CC-BY-NC-SA-2.5'
    | 'CC-BY-NC-SA-3.0'
    | 'CC-BY-NC-SA-4.0'
    | 'CC-BY-ND-1.0'
    | 'CC-BY-ND-2.0'
    | 'CC-BY-ND-2.5'
    | 'CC-BY-ND-3.0'
    | 'CC-BY-ND-4.0'
    | 'CC-BY-SA-1.0'
    | 'CC-BY-SA-2.0'
    | 'CC-BY-SA-2.5'
    | 'CC-BY-SA-3.0'
    | 'CC-BY-SA-4.0'
    | 'CC0-1.0'
    | 'CDDL-1.0'
    | 'CDDL-1.1'
    | 'CDLA-Permissive-1.0'
    | 'CDLA-Sharing-1.0'
    | 'CECILL-1.0'
    | 'CECILL-1.1'
    | 'CECILL-2.0'
    | 'CECILL-2.1'
    | 'CECILL-B'
    | 'CECILL-C'
    | 'ClArtistic'
    | 'CNRI-Jython'
    | 'CNRI-Python-GPL-Compatible'
    | 'CNRI-Python'
    | 'Condor-1.1'
    | 'CPAL-1.0'
    | 'CPL-1.0'
    | 'CPOL-1.02'
    | 'Crossword'
    | 'CrystalStacker'
    | 'CUA-OPL-1.0'
    | 'Cube'
    | 'curl'
    | 'D-FSL-1.0'
    | 'diffmark'
    | 'DOC'
    | 'Dotseqn'
    | 'DSDP'
    | 'dvipdfm'
    | 'ECL-1.0'
    | 'ECL-2.0'
    | 'EFL-1.0'
    | 'EFL-2.0'
    | 'eGenix'
    | 'Entessa'
    | 'EPL-1.0'
    | 'EPL-2.0'
    | 'ErlPL-1.1'
    | 'EUDatagrid'
    | 'EUPL-1.0'
    | 'EUPL-1.1'
    | 'EUPL-1.2'
    | 'Eurosym'
    | 'Fair'
    | 'Frameworx-1.0'
    | 'FreeImage'
    | 'FSFAP'
    | 'FSFUL'
    | 'FSFULLR'
    | 'FTL'
    | 'GFDL-1.1-only'
    | 'GFDL-1.1-or-later'
    | 'GFDL-1.2-only'
    | 'GFDL-1.2-or-later'
    | 'GFDL-1.3-only'
    | 'GFDL-1.3-or-later'
    | 'Giftware'
    | 'GL2PS'
    | 'Glide'
    | 'Glulxe'
    | 'gnuplot'
    | 'GPL-1.0-only'
    | 'GPL-1.0-or-later'
    | 'GPL-2.0-only'
    | 'GPL-2.0-or-later'
    | 'GPL-3.0-only'
    | 'GPL-3.0-or-later'
    | 'gSOAP-1.3b'
    | 'HaskellReport'
    | 'HPND'
    | 'IBM-pibs'
    | 'ICU'
    | 'IJG'
    | 'ImageMagick'
    | 'iMatix'
    | 'Imlib2'
    | 'Info-ZIP'
    | 'Intel-ACPI'
    | 'Intel'
    | 'Interbase-1.0'
    | 'IPA'
    | 'IPL-1.0'
    | 'ISC'
    | 'JasPer-2.0'
    | 'JSON'
    | 'LAL-1.2'
    | 'LAL-1.3'
    | 'Latex2e'
    | 'Leptonica'
    | 'LGPL-2.0-only'
    | 'LGPL-2.0-or-later'
    | 'LGPL-2.1-only'
    | 'LGPL-2.1-or-later'
    | 'LGPL-3.0-only'
    | 'LGPL-3.0-or-later'
    | 'LGPLLR'
    | 'Libpng'
    | 'libtiff'
    | 'LiLiQ-P-1.1'
    | 'LiLiQ-R-1.1'
    | 'LiLiQ-Rplus-1.1'
    | 'Linux-OpenIB'
    | 'LPL-1.0'
    | 'LPL-1.02'
    | 'LPPL-1.0'
    | 'LPPL-1.1'
    | 'LPPL-1.2'
    | 'LPPL-1.3a'
    | 'LPPL-1.3c'
    | 'MakeIndex'
    | 'MirOS'
    | 'MIT-0'
    | 'MIT-advertising'
    | 'MIT-CMU'
    | 'MIT-enna'
    | 'MIT-feh'
    | 'MIT'
    | 'MITNFA'
    | 'Motosoto'
    | 'mpich2'
    | 'MPL-1.0'
    | 'MPL-1.1'
    | 'MPL-2.0-no-copyleft-exception'
    | 'MPL-2.0'
    | 'MS-PL'
    | 'MS-RL'
    | 'MTLL'
    | 'Multics'
    | 'Mup'
    | 'NASA-1.3'
    | 'Naumen'
    | 'NBPL-1.0'
    | 'NCSA'
    | 'Net-SNMP'
    | 'NetCDF'
    | 'Newsletr'
    | 'NGPL'
    | 'NLOD-1.0'
    | 'NLPL'
    | 'Nokia'
    | 'NOSL'
    | 'Noweb'
    | 'NPL-1.0'
    | 'NPL-1.1'
    | 'NPOSL-3.0'
    | 'NRL'
    | 'NTP'
    | 'OCCT-PL'
    | 'OCLC-2.0'
    | 'ODbL-1.0'
    | 'OFL-1.0'
    | 'OFL-1.1'
    | 'OGTSL'
    | 'OLDAP-1.1'
    | 'OLDAP-1.2'
    | 'OLDAP-1.3'
    | 'OLDAP-1.4'
    | 'OLDAP-2.0.1'
    | 'OLDAP-2.0'
    | 'OLDAP-2.1'
    | 'OLDAP-2.2.1'
    | 'OLDAP-2.2.2'
    | 'OLDAP-2.2'
    | 'OLDAP-2.3'
    | 'OLDAP-2.4'
    | 'OLDAP-2.5'
    | 'OLDAP-2.6'
    | 'OLDAP-2.7'
    | 'OLDAP-2.8'
    | 'OML'
    | 'OpenSSL'
    | 'OPL-1.0'
    | 'OSET-PL-2.1'
    | 'OSL-1.0'
    | 'OSL-1.1'
    | 'OSL-2.0'
    | 'OSL-2.1'
    | 'OSL-3.0'
    | 'PDDL-1.0'
    | 'PHP-3.0'
    | 'PHP-3.01'
    | 'Plexus'
    | 'PostgreSQL'
    | 'psfrag'
    | 'psutils'
    | 'Python-2.0'
    | 'Qhull'
    | 'QPL-1.0'
    | 'Rdisc'
    | 'RHeCos-1.1'
    | 'RPL-1.1'
    | 'RPL-1.5'
    | 'RPSL-1.0'
    | 'RSA-MD'
    | 'RSCPL'
    | 'Ruby'
    | 'SAX-PD'
    | 'Saxpath'
    | 'SCEA'
    | 'Sendmail'
    | 'SGI-B-1.0'
    | 'SGI-B-1.1'
    | 'SGI-B-2.0'
    | 'SimPL-2.0'
    | 'SISSL-1.2'
    | 'SISSL'
    | 'Sleepycat'
    | 'SMLNJ'
    | 'SMPPL'
    | 'SNIA'
    | 'Spencer-86'
    | 'Spencer-94'
    | 'Spencer-99'
    | 'SPL-1.0'
    | 'SugarCRM-1.1.3'
    | 'SWL'
    | 'TCL'
    | 'TCP-wrappers'
    | 'TMate'
    | 'TORQUE-1.1'
    | 'TOSL'
    | 'Unicode-DFS-2015'
    | 'Unicode-DFS-2016'
    | 'Unicode-TOU'
    | 'Unlicense'
    | 'UPL-1.0'
    | 'Vim'
    | 'VOSTROM'
    | 'VSL-1.0'
    | 'W3C-19980720'
    | 'W3C-20150513'
    | 'W3C'
    | 'Watcom-1.0'
    | 'Wsuipa'
    | 'WTFPL'
    | 'X11'
    | 'Xerox'
    | 'XFree86-1.1'
    | 'xinetd'
    | 'Xnet'
    | 'xpp'
    | 'XSkat'
    | 'YPL-1.0'
    | 'YPL-1.1'
    | 'Zed'
    | 'Zend-2.0'
    | 'Zimbra-1.3'
    | 'Zimbra-1.4'
    | 'zlib-acknowledgement'
    | 'Zlib'
    | 'ZPL-1.1'
    | 'ZPL-2.0'
    | 'ZPL-2.1'
  >
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  manifest?: Readonly<t.OutputOf<typeof FhirImplementationGuide_Manifest>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  meta?: Readonly<t.OutputOf<typeof FhirMeta>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  modifierExtension?: ReadonlyArray<t.OutputOf<typeof FhirExtension>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  name?: Readonly<t.OutputOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  packageId?: Readonly<t.OutputOf<typeof FhirId>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  publisher?: Readonly<t.OutputOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  resourceType: Readonly<'ImplementationGuide'>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  status?: Readonly<'draft' | 'active' | 'retired' | 'unknown'>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  text?: Readonly<t.OutputOf<typeof FhirNarrative>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  title?: Readonly<t.OutputOf<typeof FhirString>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  url?: Readonly<t.OutputOf<typeof FhirUri>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  useContext?: ReadonlyArray<t.OutputOf<typeof FhirUsageContext>>
  /** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
  version?: Readonly<t.OutputOf<typeof FhirString>>
}
